import { init, parse } from "es-module-lexer";
import fs from "fs";

import Koa from "./node_modules/koa/dist/koa.mjs";

console.dir(Koa);

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
