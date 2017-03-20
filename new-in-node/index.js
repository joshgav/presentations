'use strict';

const pkg       = require('./package.json');
const fs        = require('fs');
const path      = require('path');
const exec      = require('child_process').exec;
const async     = require('async');

const BASE_DIR = './node_modules/reveal.js/';

fs.mkdir(path.resolve(BASE_DIR, 'assets'), (err) => {
  if (err) console.log(err);
});

pkg.files.forEach(linkFile);

process.chdir(BASE_DIR); 

console.log("About to `npm install`.");
var child = exec('npm install', (err) => {
  if (err) throw new Error(err);
});

child.on('exit', (code, signal) => {
  // error should be handled by callback above

  console.log("About to `grunt serve`.")
  var child2 = exec('grunt serve', (err) => {
    if (err) throw new Error(err);

    console.log("Presentation completed.");

    process.on('SIGINT', () => { child2.kill(); cleanup(); });
    process.on('exit', () => { child2.kill(); cleanup(); })
  });
});

function linkFile (filename) {
  var sourcePath = path.resolve(__dirname, filename);
  var targetPath = path.resolve(BASE_DIR, filename);
  
  fs.unlink(targetPath, (err) => {
    if (err) console.log(err);

    fs.symlinkSync( sourcePath, targetPath );
  });
}

function unlinkFile (filename) {
  var targetPath = path.resolve(BASE_DIR, filename)
  fs.unlinkSync(targetPath);
}

function cleanup () {
  async.each(pkg.files, unlinkFile, (err) => {
    if (err) throw new Error(err);
  });
  fs.chdir(__dirname);
}

