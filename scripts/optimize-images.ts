import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function optimizeImage(inputPath: string, outputPath: string) {
  const image = sharp(inputPath);
  
  // Convert to WebP with good quality/size balance
  await image
    .webp({ quality: 80, effort: 6 })
    .toFile(outputPath);
    
  // Generate blur placeholder
  const blurPlaceholder = await image
    .resize(10) // tiny version
    .blur()
    .toBuffer();
    
  const blurDataURL = `data:image/webp;base64,${blurPlaceholder.toString('base64')}`;
  
  return blurDataURL;
}

async function main() {
  const images = [
    'Landing_Page.jpg',
    'gross_margins.jpg',
    'journal_entries.jpg',
    'other_mediums.jpg',
    'zjo.jpg',
  ];

  const publicDir = path.join(process.cwd(), 'public');
  
  for (const image of images) {
    const inputPath = path.join(publicDir, image);
    const outputPath = path.join(publicDir, image.replace('.jpg', '.webp'));
    
    const blurDataURL = await optimizeImage(inputPath, outputPath);
    
    console.log(`${image}:`, { blurDataURL });
  }
}

main().catch(console.error); 