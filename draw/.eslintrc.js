module.exports = {
    parserOptions: {
        ecmaVersion: 6
    },
    ecmaFeatures:{
        classes:true
    },
    "env": {
        "browser": true
    },
    "globals":{
        "setup":true,
        "text":false,
        "rect":false,
        "width":false,
        "height":false,
        "createVector":false
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "off",
            "tab"
        ],
        "no-undef":[
            "off"
        ],
        "no-unused-vars":[
            "off"
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