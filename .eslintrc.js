module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
  },
  extends: ["eslint:recommended", "airbnb", "plugin:prettier/recommended"],
  ignorePatterns: ["index.js", "reportWebVitals.js"],
  rules: {
    "import/no-unresolved": "off",
    "react/prop-types": 0,
    "no-extra-semi": "error",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
