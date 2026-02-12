import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
const distPath = join(__dirname, 'dist');

// Serve static files from the dist directory
app.use(express.static(distPath));

// SPA fallback - serve index.html for all non-file routes
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  if (existsSync(indexPath)) {
    res.type('html').send(readFileSync(indexPath));
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`YourVoice Frontend server listening on port ${PORT}`);
  console.log(`Serving static files from ${distPath}`);
});
