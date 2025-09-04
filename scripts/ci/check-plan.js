import fs from 'fs';
const p='/workspace/PLAN.md';
const s=fs.readFileSync(p,'utf8');
const required=['**1.0 Complete F1 Discovery Phase**','**2.0 Implement AI-Governor Trigger System**','**3.0 Set up Immutable Artifact Management**'];
let ok=true;
for(const k of required){
  if(!s.includes(k)){
    console.error(`Missing section: ${k}`);
    ok=false;
  }
}
if(!ok) process.exit(1);
console.log('PLAN.md sections OK');
