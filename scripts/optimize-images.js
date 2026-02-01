const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * Image Optimization Script
 * 
 * This script optimizes images for web:
 * - Converts to WebP format
 * - Generates responsive sizes
 * - Preserves originals
 * 
 * Usage: node scripts/optimize-images.js
 */

const SIZES = [320, 640, 768, 1024, 1280, 1920];
const QUALITY = 85;

async function optimizeImage(inputPath, outputDir) {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const ext = path.extname(inputPath).toLowerCase();

    // Skip if not an image
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        return;
    }

    console.log(`Optimizing: ${inputPath}`);

    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Generate WebP versions at different sizes
        for (const size of SIZES) {
            if (size <= metadata.width) {
                await image
                    .resize(size, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .webp({ quality: QUALITY })
                    .toFile(path.join(outputDir, `${filename}-${size}w.webp`));

                console.log(`  ✓ Generated ${filename}-${size}w.webp`);
            }
        }

        // Generate full-size WebP
        await image
            .webp({ quality: QUALITY })
            .toFile(path.join(outputDir, `${filename}.webp`));

        console.log(`  ✓ Generated ${filename}.webp`);

    } catch (error) {
        console.error(`  ✗ Error optimizing ${inputPath}:`, error.message);
    }
}

async function processDirectory(dir, outputDir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            const newOutputDir = path.join(outputDir, entry.name);
            if (!fs.existsSync(newOutputDir)) {
                fs.mkdirSync(newOutputDir, { recursive: true });
            }
            await processDirectory(fullPath, newOutputDir);
        } else if (entry.isFile()) {
            await optimizeImage(fullPath, outputDir);
        }
    }
}

async function main() {
    const assetsDir = path.join(__dirname, '..', 'src', 'assets');
    const outputDir = path.join(__dirname, '..', 'public', 'optimized-images');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Starting image optimization...\n');
    await processDirectory(assetsDir, outputDir);
    console.log('\n✓ Image optimization complete!');
    console.log(`Optimized images saved to: ${outputDir}`);
}

main().catch(console.error);
