#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');

function read(p){return fs.readFileSync(p,'utf8');}
function write(p,c){fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,c,'utf8');}

function generatePlan(briefText){
	const title = (briefText.match(/^#\s*(.+)/m)||[])[1] || 'Project Brief';
	return `# Autoplan\n\n## Source Brief\n\n> ${title}\n\n## Objectives\n- Encode capability registry and policies\n- Dual routing with parity logs\n- CI gates (F8/Mod-safety/Docs/Audit)\n\n## Phases\n- Phase 0: Kickoff & Scope Lock\n- Phase 1: Registry + Routing Log\n- Phase 2: Dual Routing + Parity\n- Phase 3: Policy DSL + CI\n- Phase 4–9: As per AGGREGATE_2\n`;
}

function main(){
	const root = path.join(__dirname,'..');
	const briefPath = process.argv[2];
	if(!briefPath){console.error('Usage: autoplan.cjs <brief.md>');process.exit(1);} 
	const abs = path.isAbsolute(briefPath)?briefPath:path.join(root,briefPath);
	if(!fs.existsSync(abs)){console.error('Brief not found:',abs);process.exit(2);} 
	const brief = read(abs);
	const plan = generatePlan(brief);
	const outPlan = path.join(root,'docs','AGGREGATE_2','autoplan',path.basename(briefPath).replace(/\.md$/,'')+'-PLAN.md');
	write(outPlan,plan);
	console.log('Generated:',outPlan);
}

if(require.main===module){main();}