module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: ["react-app", "plugin:storybook/recommended"],
  rules: {
    "no-inner-declarations": 1
  }
};