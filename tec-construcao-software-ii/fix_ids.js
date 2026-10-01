const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (file.endsWith('.service.ts')) {
    const newContent = content.replace(/id:\s*number/g, 'id: string');
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  } else if (file.endsWith('.controller.ts')) {
    // The previous powershell might have resulted in (+id, data) -> (id, data) or might have failed.
    // Let's just catch all +id and remove the +.
    const newContent = content.replace(/\+id/g, 'id');
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
  }
});
console.log('Done fixing IDs');
