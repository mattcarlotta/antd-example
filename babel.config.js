module.exports = (api) => {
  api.cache(true);

  return {
    presets: ["next/babel"],
    plugins: [
      [
        "import",
        { libraryName: "antd", libraryDirectory: "lib", style: "css" },
      ],
      [
        "import",
        {
          libraryName: "@ant-design/icons",
          libraryDirectory: "lib/icons",
          camel2DashComponentName: false,
        },
        "@ant-design/icons",
      ],
    ],
  };
};
