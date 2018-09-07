#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const linkCheck = require('link-check');

const validateMD = (direction) => new Promise((resolve, reject) => {
  // path.resolve(direction);
    if (path.extname(direction) === '.md') {
      resolve('direction');
    }
    else {
      reject('no es un archivo MD')
    }
  })

module.exports = validateMD;