const dotenv = require("dotenv");
const { statSync } = require("fs");
const { resolve } = require("path");

const path = `${__dirname}/.env.${process.env.NODE_ENV}`;

if (statSync(resolve(path)).isFile()) {
  dotenv.config({
    path,
  });
}
