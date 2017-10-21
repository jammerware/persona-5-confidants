'use strict'

const fse = require('fs-extra')
const path = require('path')
const Promise = require('bluebird')
const Confidant = require('../modules/Confidant')

function getJsonFilename (filepath) {
  return path.join(__dirname, 'confidant-objects',
      path.basename(filepath) + '.json')
}

function convertToConfidantObject (filepath) {
  return fse.readFile(filepath, 'utf8').then((data) => {
    const lines = data.split('\n').map((line) => line.trim())
    return new Confidant(lines)
  })
}

function makeConfidantObjects () {
  return fse.readdir(path.join(__dirname, 'confidant-sources')).then((filenames) => {
    const filepaths = filenames.map(
      (name) => path.join(__dirname, 'confidant-sources', name)
      )

    return Promise.map(filepaths, (filepath) => {
      return convertToConfidantObject(filepath)
    })
  }).then((confidants) => {
    return Promise.map(confidants, (confidant) => {
      return fse.writeFile(getJsonFilename(confidant.name.replace(/\s+/g, '-')),
        JSON.stringify(confidant, null, '\t'), 'utf8')
    })
  })
}

makeConfidantObjects()
