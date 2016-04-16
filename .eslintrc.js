module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node" : true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "jsx": true,
        "arrowFunctions": true,
        "blockBindings": true,
        "generators": true
      },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
