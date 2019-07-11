const express = require('express');
const { FileUploadService } = require('./service/fileUploadService');
const { FileProcessor } = require('./service/fileProcesser');

async function setupApp(config) {
  const app = express();
  app.get('/', (_req, res) => {
    res.redirect(303, '/health');
    res.end();
  });
  app.get('/health', (_req, res) => {
    res.status(200);
    res.json({ message: 'Hello' });
    res.end();
  });
  const uploadService = new FileUploadService(config);
  const fileProcessor = new FileProcessor();
  app.post('/api/file', async (req, res) => {
    try {
      const contentType = req.get('content-type');
      const filePath = await uploadService.uploadFile(req, contentType);
      const processedData = await fileProcessor.process(filePath);
      res.status(201);
      res.json({ data: processedData });
      res.end();
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  return app;
}
exports.setupApp = setupApp;
