import { removeBackground } from '@imgly/background-removal-node';
import { readFileSync, writeFileSync } from 'fs';

const input = readFileSync('Profile.png');
const blob = new Blob([input], { type: 'image/png' });

console.log('Removing background...');
const result = await removeBackground(blob);
const buffer = Buffer.from(await result.arrayBuffer());
writeFileSync('Profile_nobg.png', buffer);
console.log('Done! Saved to Profile_nobg.png');
