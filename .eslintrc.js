module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "node": true
  },
  "extends": "airbnb",
  "ignorePatterns": ["bundle.js", "*.test.js"],
  "rules": {
    "no-console": "off"
  }
}