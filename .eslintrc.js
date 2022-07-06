module.exports = {
  env: {
    node: true,
  },
  plugins: ["eslint-plugin-prettier"],
  extends: ["./index"],
  rules: {
    "prettier/prettier": 2,
  },
}
