module.exports = {
    "extends": "airbnb-base"
};
process.chdir(__dirname);
 
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    codeFrame: false
  },
  extends: [
    'airbnb-bundle',
  ],
  env: {
     "browser": true, 
     "node": true 
    },
  globals:{
    "document": false 
  }
};