const { init, parse } = require("es-module-lexer");
const fs = require("fs");

(async () => {
  // either await init, or call parse asynchronously
  // this is necessary for the Web Assembly boot
  await init;

  const source = fs.readFileSync("./node_modules/koa/dist/koa.mjs").toString();

  console.dir(source);

  const [imports, exports] = parse(source);

  console.dir(imports);
  console.dir(exports);
})();
