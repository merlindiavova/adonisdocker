#!/usr/bin/env node

const fs   = require('fs')
const copy = require('./foundation/copy')
const readdir = require('./foundation/readdir')

const run = async () => {
    const sourceFiles = readdir(__dirname + '/adonisd');
    const copiedFiles = copy(__dirname + '/adonisd', process.cwd())

    if(copiedFiles.length === sourceFiles.length) {
        console.log('Done. adonisd has been copied to your project.')
    } else {
        console.error('Whoops. Could not copy adonisd to your project.')
    }
}

run();
