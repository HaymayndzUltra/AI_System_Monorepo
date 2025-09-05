#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');

function loadJson(p) {
	return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function tokenize(text) {
	return text.toLowerCase().match(/[a-z0-9_]+/g) || [];
}

function classify(input, triggers) {
	const tokens = tokenize(input);
	const scores = {};
	for (const [cap, words] of Object.entries(triggers)) {
		scores[cap] = words.reduce((acc, w) => acc + (tokens.includes(w.toLowerCase()) ? 1 : 0), 0);
	}
	const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
	const [bestCap, bestScore] = entries[0] || ['unknown', 0];
	const confidence = Math.min(1, bestScore / 3);
	const overlays = [];
	if (scores['security.overlay'] > 0 || scores['code.modify.safety'] > 0) overlays.push('security.overlay');
	return { capability: bestCap, confidence, overlays, scores };
}

function legacyResolve(input, legacyMap) {
	const lc = input.toLowerCase();
	for (const [legacy, cap] of Object.entries(legacyMap)) {
		const terms = legacy.split(',').map(s => s.trim());
		if (terms.some(t => lc.includes(t.toLowerCase()))) return cap;
	}
	return null;
}

function main() {
	const root = path.join(__dirname, '..');
	const triggersPath = path.join(root, 'config', 'triggers.json');
	const capRulesPath = path.join(root, 'config', 'capability-rules.json');
	const legacyPath = path.join(root, 'config', 'legacy-mappings.json');
	const logsDir = path.join(root, 'reports');
	const jsonlPath = path.join(logsDir, 'routing-log.jsonl');
	if (!fs.existsSync(triggersPath)) { console.error('Missing triggers.json'); process.exit(2); }
	if (!fs.existsSync(capRulesPath)) { console.error('Missing capability-rules.json'); process.exit(2); }
	if (!fs.existsSync(legacyPath)) { console.error('Missing legacy-mappings.json'); process.exit(2); }
	if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
	const triggers = loadJson(triggersPath);
	const capRules = loadJson(capRulesPath);
	const legacyMap = loadJson(legacyPath);
	const input = process.argv.slice(2).join(' ').trim();
	if (!input) { console.error('Usage: router.cjs <text>'); process.exit(1); }
	const capResult = classify(input, triggers);
	const legacyCap = legacyResolve(input, legacyMap);
	const selectedRules = capRules[capResult.capability] || [];
	const out = {
		capability: capResult.capability,
		confidence: Number(capResult.confidence.toFixed(2)),
		overlays: capResult.overlays,
		selected_rules: selectedRules,
		legacy_capability: legacyCap,
		parity: legacyCap ? (legacyCap === capResult.capability ? 'match' : 'mismatch') : 'no-legacy',
		outcomes: { status: capResult.confidence >= 0.7 ? 'proceed' : 'clarify' },
		timestamp: new Date().toISOString(),
		input
	};
	console.log(JSON.stringify(out, null, 2));
	fs.appendFileSync(jsonlPath, JSON.stringify(out) + '\n', 'utf8');
}

if (require.main === module) {
	main();
}