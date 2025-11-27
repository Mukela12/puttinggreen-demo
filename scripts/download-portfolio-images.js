/**
 * Portfolio Image Downloader
 * Downloads 120-150 curated golf course images from Pexels API
 * Organizes into /public/images/golf/portfolio/installer-{1-15}/ directories
 * Each installer gets 8-12 unique images for their portfolio gallery
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const PEXELS_API_KEY = 'nh977S3v98t1D3EGnHXGycHLvUGT49ZA5jIGJvOScH2of0DsIJgCHcBq';

// Create portfolio directory structure
const portfolioBaseDir = path.join(__dirname, '../public/images/golf/portfolio');

// Ensure base portfolio directory exists
if (!fs.existsSync(portfolioBaseDir)) {
  fs.mkdirSync(portfolioBaseDir, { recursive: true });
}

// Create 15 installer subdirectories
for (let i = 1; i <= 15; i++) {
  const installerDir = path.join(portfolioBaseDir, `installer-${i}`);
  if (!fs.existsSync(installerDir)) {
    fs.mkdirSync(installerDir, { recursive: true });
  }
}

/**
 * Fetch photos from Pexels API
 */
async function fetchPexelsPhotos(query, perPage = 80, page = 1) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.pexels.com',
      path: `/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`,
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    };

    https.get(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

/**
 * Download image from URL
 */
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        const stats = fs.statSync(filepath);
        const fileSizeInKB = (stats.size / 1024).toFixed(2);
        console.log(`✓ Downloaded: ${path.basename(filepath)} (${fileSizeInKB}KB)`);
        resolve();
      });
    }).on('error', (error) => {
      fs.unlink(filepath, () => {});
      reject(error);
    });
  });
}

/**
 * Main execution
 */
async function main() {
  console.log('🏌️  Starting portfolio image download from Pexels...\n');

  try {
    // Fetch multiple batches of images with varied queries for diversity
    console.log('Fetching images from Pexels API...\n');

    const queries = [
      'golf course putting green',
      'golf course landscape',
      'putting green installation',
      'artificial turf golf',
      'backyard putting green'
    ];

    let allPhotos = [];

    for (const query of queries) {
      console.log(`Searching: "${query}"...`);
      const result = await fetchPexelsPhotos(query, 30, 1);
      allPhotos = allPhotos.concat(result.photos);
      // Small delay to respect API rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log(`\n✓ Found ${allPhotos.length} total photos\n`);

    // Remove duplicates based on photo ID
    const uniquePhotos = Array.from(
      new Map(allPhotos.map(photo => [photo.id, photo])).values()
    );

    console.log(`✓ ${uniquePhotos.length} unique photos after deduplication\n`);

    // Distribute images across 15 installers (8-12 images each)
    const imagesPerInstaller = [12, 10, 8, 11, 9, 12, 10, 11, 8, 10, 12, 9, 11, 8, 10];

    let photoIndex = 0;

    for (let installerId = 1; installerId <= 15; installerId++) {
      const numImages = imagesPerInstaller[installerId - 1];
      const installerDir = path.join(portfolioBaseDir, `installer-${installerId}`);

      console.log(`\n📁 Installer ${installerId} - Downloading ${numImages} images:`);

      for (let imageNum = 1; imageNum <= numImages; imageNum++) {
        if (photoIndex >= uniquePhotos.length) {
          console.log('⚠️  Reached end of available photos');
          break;
        }

        const photo = uniquePhotos[photoIndex];
        const imageUrl = photo.src.large; // 1200px width for high quality
        const filepath = path.join(installerDir, `portfolio-${imageNum}.jpg`);

        try {
          await downloadImage(imageUrl, filepath);
          photoIndex++;

          // Small delay between downloads
          await new Promise(resolve => setTimeout(resolve, 200));
        } catch (error) {
          console.error(`✗ Failed to download image ${imageNum}:`, error.message);
        }
      }
    }

    console.log('\n✅ Portfolio image download complete!');
    console.log(`📊 Total images downloaded: ${photoIndex}`);
    console.log(`📁 Images organized in: ${portfolioBaseDir}`);

  } catch (error) {
    console.error('❌ Error during download:', error);
    process.exit(1);
  }
}

main();
