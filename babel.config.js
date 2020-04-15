module.exports = api => {
  api.cache(true);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      [
        "import",
        { libraryName: "antd", libraryDirectory: "lib", style: "css" },
      ],
    ],
  };
};
