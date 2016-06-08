"use strict";

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "defaults/configurations/es6",
    "defaults/rules/react/on"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "fetch": false
  },
  "rules": {
    "no-extra-parens": 0,
    "no-var": 2
  }
};