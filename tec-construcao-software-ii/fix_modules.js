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
      if (file.endsWith('.module.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  const skip = ['app.module.ts', 'prisma.module.ts', 'auth.module.ts', 'users.module.ts'];
  if (skip.some(s => file.endsWith(s))) return;

  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (!content.includes('PrismaModule')) {
    // Add import statement at the top
    content = `import { PrismaModule } from '../prisma/prisma.module';\n` + content;
    
    // Add imports array to @Module decorator
    if (content.includes('controllers:')) {
      content = content.replace('controllers:', 'imports: [PrismaModule],\n  controllers:');
    } else {
      content = content.replace('providers:', 'imports: [PrismaModule],\n  providers:');
    }
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
  }
});
console.log('Done fixing modules');
