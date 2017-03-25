module.exports = {
    parserOptions: {
        ecmaVersion: 6
    },
    ecmaFeatures: {
        classes: true
    },
    "env": {
        "browser": true
    },
    
    "extends": "eslint:recommended",
    "rules": {
        "no-unused-vars":[
            "off"
        ],
        "no-undef":[
            "off"
        ],
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};