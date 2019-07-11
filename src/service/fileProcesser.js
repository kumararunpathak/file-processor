const fs = require('fs');
const readline = require('readline');
class FileProcessor {
  constructor() {}
  async process(filePath) {
    const response = [];
    return new Promise((resolve, reject) => {
      const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath)
      });

      readInterface.on('line', function(line) {
        console.log(line);
        let lineArray = line ? line.split('_____') : [];
        let lineData = {
          host: lineArray[0] || '',
          logName: lineArray[1] || '',
          time: lineArray[2] || '',
          method: lineArray[3] || '',
          url: lineArray[4] || '',
          response: lineArray[5] || '',
          bytes: lineArray[6] || '',
          referrer: lineArray[7] || null,
          useragent: lineArray[8] || null
        };
        response.push(lineData);
      });

      readInterface.on('close', function(line) {
        resolve(response);
      });

      readInterface.on('error', err => {
        reject(err);
      });
    });
  }
}

exports.FileProcessor = FileProcessor;
