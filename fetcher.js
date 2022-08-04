const fs = require('fs');
const request = require('request');
// takes in URL and local file path
// download resources at the URL to local path on machine
// when complete print out a message like "downloaded and save 1235 bytes to ./index.html"
const args = process.argv.splice(2);
const domain = args[0];
const file = args[1]

request(domain, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);

  fs.writeFile(file, body, err => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`Downloaded and saved ${body.length} bytes to ${file}`)
});