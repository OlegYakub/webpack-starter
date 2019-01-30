const path = require('path');

module.exports = {
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  templatePath: path.resolve(__dirname, '../', 'public/index.html'),
  publicImages: path.resolve(__dirname, '../', 'public/images'),
  publicStyles: path.resolve(__dirname, '../', 'public/styles'),
  imagesFolder: 'images',
};
