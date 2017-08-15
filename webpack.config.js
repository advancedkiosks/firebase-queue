'use strict';

module.exports = {
  target: 'node',
  entry: './src/queue.js',
  output: {
    libraryTarget: 'var',
    library: 'FirebaseQueue',
    filename: 'dist/firebase-queue.js'
  }
};
