module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["@babel/plugin-transform-modules-commonjs",
      {
        strictMode: false,
        allowTopLevelThis: true,
        loose: true,
      }
    ],
    [
      "module-resolver",
      {
        alias: {
          "pages": "./src/pages",
          "components": "./src/components",
          "core": "./src/core"
        }
      }
    ],
  ]
};
