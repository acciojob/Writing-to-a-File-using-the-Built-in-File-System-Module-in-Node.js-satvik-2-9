const fs = require('fs');

const message = 'Hello, World!';
const outputFile = 'output.txt';

fs.writeFile(outputFile, message, 'utf8', (err) => {
  if (err) throw err;
  console.log('Message written to output.txt');
});
