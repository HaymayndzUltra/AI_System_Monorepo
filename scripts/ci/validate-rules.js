import fs from 'fs';
import path from 'path';

function hasFrontmatter(p){
  const s=fs.readFileSync(p,'utf8');
  return s.startsWith('---\n') && s.includes('---\n',4);
}

const roots=[
  '/workspace/.cursor/rules/master-rules',
  '/workspace/.cursor/rules/common-rules'
];
let ok=true;
for(const dir of roots){
  if(!fs.existsSync(dir)) continue;
  for(const f of fs.readdirSync(dir)){
    if(!f.endsWith('.mdc')) continue;
    const p=path.join(dir,f);
    if(!hasFrontmatter(p)){
      console.error(`Missing frontmatter: ${p}`);
      ok=false;
    }
  }
}
if(!ok){
  process.exit(1);
}
console.log('Rules frontmatter OK');
