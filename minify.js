const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'index.html');
const outputPath = path.join(__dirname, 'index.min.html');

let html = fs.readFileSync(inputPath, 'utf8');

function minifyBlock(content) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s*([{};:,>\(\)\[\]=+\-])\s*/g, '$1')
    .trim();
}

html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, block => {
  const inner = block.replace(/^<style[^>]*>/i, '').replace(/<\/style>$/i, '');
  return `<style>${minifyBlock(inner)}</style>`;
});

html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, block => {
  const opening = block.match(/^<script[^>]*>/i)[0];
  const closing = '</script>';
  const inner = block.slice(opening.length, block.length - closing.length);
  return `${opening}${minifyBlock(inner)}${closing}`;
});

html = html.replace(/>\s+</g, '><');
html = html.replace(/\s{2,}/g, ' ');

fs.writeFileSync(outputPath, html, 'utf8');
console.log('Generado:', outputPath);
