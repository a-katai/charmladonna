const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const { createHash } = require('crypto');

const INPUT_DIR = 'public/gallery';
const OUTPUT_DIR = 'public/gallery/processed';
const METADATA_FILE = 'src/data/imageMetadata.json';

const SIZES = {
  small: { width: 640, height: null },
  medium: { width: 1024, height: null },
  large: { width: 1920, height: null }
};

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function generateHash(buffer) {
  return createHash('sha1').update(buffer).digest('hex').substring(0, 8);
}

async function getDominantColor(image) {
  const { dominant } = await image.stats();
  return `rgb(${dominant.r}, ${dominant.g}, ${dominant.b})`;
}

async function processImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const originalBuffer = await fs.readFile(inputPath);
  const hash = await generateHash(originalBuffer);
  
  const aspectRatio = metadata.width / metadata.height;
  const dominantColor = await getDominantColor(image);

  // Create responsive versions
  const responsive = {};
  for (const [size, dimensions] of Object.entries(SIZES)) {
    const width = dimensions.width;
    const height = Math.round(width / aspectRatio);
    
    const processedPath = path.join(OUTPUT_DIR, `${filename}-${size}`);
    
    // Generate AVIF
    await image
      .resize(width, height, { fit: 'contain' })
      .avif({ quality: 80 })
      .toFile(`${processedPath}.avif`);
    
    // Generate WebP
    await image
      .resize(width, height, { fit: 'contain' })
      .webp({ quality: 85 })
      .toFile(`${processedPath}.webp`);
    
    // Generate optimized JPEG
    await image
      .resize(width, height, { fit: 'contain' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(`${processedPath}.jpg`);
    
    responsive[size] = {
      width,
      height,
      formats: {
        avif: `/gallery/processed/${filename}-${size}.avif`,
        webp: `/gallery/processed/${filename}-${size}.webp`,
        fallback: `/gallery/processed/${filename}-${size}.jpg`
      }
    };
  }

  // Generate blur placeholder
  const blurPlaceholder = await image
    .resize(20, Math.round(20 / aspectRatio))
    .blur(10)
    .toBuffer();
  const blurPlaceholderBase64 = `data:image/jpeg;base64,${blurPlaceholder.toString('base64')}`;

  return {
    id: hash,
    src: `/gallery/${path.basename(inputPath)}`,
    dimensions: {
      width: metadata.width,
      height: metadata.height
    },
    responsive,
    metadata: {
      aspectRatio,
      dominantColor,
      blurDataUrl: blurPlaceholderBase64
    }
  };
}

async function processAllImages() {
  try {
    // Ensure output directory exists
    await ensureDirectoryExists(OUTPUT_DIR);

    // Get all images from input directory
    const files = await fs.readdir(INPUT_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to process...`);

    // Process all images
    const processedImages = await Promise.all(
      imageFiles.map(async file => {
        const inputPath = path.join(INPUT_DIR, file);
        console.log(`Processing ${file}...`);
        try {
          const result = await processImage(inputPath);
          console.log(`✓ Processed ${file}`);
          return result;
        } catch (error) {
          console.error(`× Error processing ${file}:`, error);
          return null;
        }
      })
    );

    // Filter out failed processes and save metadata
    const metadata = processedImages.filter(Boolean);
    await fs.writeFile(
      METADATA_FILE,
      JSON.stringify(metadata, null, 2)
    );

    console.log(`\nProcessing complete!`);
    console.log(`Successfully processed ${metadata.length} images`);
    console.log(`Metadata saved to ${METADATA_FILE}`);

  } catch (error) {
    console.error('Processing failed:', error);
    process.exit(1);
  }
}

// Run the script
processAllImages(); 