const sharp = require('sharp');

const fs = require('fs');

// directory path
const dir = `${__dirname}/public/img/partners`;

// list all files in the directory
fs.readdir(dir, (err, files) => {
  if (err) {
    throw err;
  }

  // files object contains all files names
  // log them on console
  files
    .filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/))
    // .slice(0, 1)
    .forEach((file) => {
      const path = `${dir}/${file}`;
      // const path = `./public/img/${file}`;
      console.log(path);
      sharp(path).toFile(`${path}.webp`, (err, info) => {
        err ? console.log('err', err) : console.log(path, info);
      });
      // sharp(`${__dirname}/${file}`)
    });
});
