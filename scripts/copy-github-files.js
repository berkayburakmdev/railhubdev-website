import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

// GitHub Pages için gerekli dosyaları dist klasörüne kopyala
const filesToCopy = ['CNAME', '.nojekyll'];
const distDir = 'dist';

filesToCopy.forEach(file => {
  const srcPath = join(process.cwd(), file);
  const destPath = join(process.cwd(), distDir, file);

  if (existsSync(srcPath)) {
    try {
      copyFileSync(srcPath, destPath);
      console.log(`✅ ${file} copied to ${distDir}/`);
    } catch (error) {
      console.error(`❌ Failed to copy ${file}:`, error.message);
    }
  } else {
    console.warn(`⚠️  ${file} not found, skipping...`);
  }
});
