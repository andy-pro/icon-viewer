const fs = require('fs');
const template = fs.readFileSync('template.js', 'utf8');

const sets = ['md', 'fa', 'ti', 'go', 'io'],
  rootPath = '../node_modules/react-icons/';

sets.forEach(setName => {
  var path = rootPath + setName,
    list = fs.readdirSync(path),
    svgs = '';

  list.forEach(name => {
    if (name === 'index.js') return;
    var parts = name.split('.'),
      file = path + '/' + name,
      iconName = setName + '-' + parts[0];

    var s = fs.readFileSync(file, 'utf8');
    s = /<g>[\s\S]*<\/g>/.exec(s);
    s = s[0];
    var svg = s
      .replace('<g>', '<G>')
      .replace('</g>', '</G>')
      .replace(/<path/g, '<Path');

    svgs += `  "${iconName}": (\n    ${svg}\n  ),\n`;
  });

  var result = template.replace('  /*svgs*/', svgs);

  fs.writeFileSync(setName + '-index.js', result);
  console.log('icon font:', setName, list.length, 'items, OK!');
});
