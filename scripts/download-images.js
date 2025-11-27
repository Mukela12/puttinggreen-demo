/**
 * Download golf course images from Pexels API
 * Run with: node scripts/download-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const PEXELS_API_KEY = 'nh977S3v98t1D3EGnHXGycHLvUGT49ZA5jIGJvOScH2of0DsIJgCHcBq';
const BASE_URL = 'https://api.pexels.com/v1';

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Fetch Pexels photos
async function fetchPexelsPhotos(query, perPage = 20) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.pexels.com',
      path: `/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`,
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`API returned ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('🏌️  Downloading golf course images from Pexels...\n');

  try {
    // Fetch golf course images
    console.log('Fetching golf course photos...');
    const result = await fetchPexelsPhotos('golf course putting green', 20);

    if (!result.photos || result.photos.length === 0) {
      throw new Error('No photos found');
    }

    console.log(`Found ${result.photos.length} photos\n`);

    // Download installer card images (15 images)
    console.log('Downloading installer card images (400x300)...');
    const cardsDir = path.join(__dirname, '..', 'public', 'images', 'golf', 'cards');

    for (let i = 0; i < Math.min(15, result.photos.length); i++) {
      const photo = result.photos[i];
      // Use medium size image (approximately 400x300)
      const imageUrl = photo.src.medium;
      const filepath = path.join(cardsDir, `golf-${i + 1}.jpg`);
      await downloadImage(imageUrl, filepath);
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Download hero images (larger, 3 images)
    console.log('\nDownloading hero images (1200x400)...');
    const heroDir = path.join(__dirname, '..', 'public', 'images', 'golf', 'hero');

    for (let i = 0; i < Math.min(3, result.photos.length); i++) {
      const photo = result.photos[i];
      // Use large size image for hero
      const imageUrl = photo.src.large;
      const filepath = path.join(heroDir, `hero-${i + 1}.jpg`);
      await downloadImage(imageUrl, filepath);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log('\n✅ All images downloaded successfully!');
    console.log(`📁 Cards: public/images/golf/cards/ (15 images)`);
    console.log(`📁 Hero: public/images/golf/hero/ (3 images)`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
