module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "node": true
  },
  "extends": "airbnb",
  "ignorePatterns": ["bundle.js", "__tests__"],
  "rules": {
    "no-console": "off"
  }
}