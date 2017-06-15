var replace = require('replace-in-file');

// export * from '../browser/components';
// export * from '../native/components';

var target = process.argv[2];
console.log('Switch to ' + '\033[1;33m' + target + '\033[0m');

const options = {
  files: ['src/common/components.js', 'src/common/styles.js'],
  from: /browser|native/,
  to: target,
};

try {
  let changedFiles = replace.sync(options);
  console.log('Modified files:', changedFiles.join(', '));
  console.log('OK');
} catch (error) {
  console.error('Error occurred:', error);
}