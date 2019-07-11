const path = require('path');
const fs = require('fs');
const v4 = require('uuid/v4');

class FileUploadService {
  constructor(config) {
    this._config = config;
    console.log(this._config);
  }

  async uploadFile(readStream, contentType) {
    return new Promise((resolve, reject) => {
      const internalId = v4();
      console.log(this._config, internalId);
      const filePath = path.resolve(this._config.storageLocation, internalId);
      console.log(filePath);
      const writeStream = fs.createWriteStream(filePath);
      writeStream.on('finish', () => {
        resolve(filePath);
      });
      writeStream.on('error', err => {
        reject(err);
      });
      readStream.pipe(writeStream);
    });
  }
}
exports.FileUploadService = FileUploadService;
