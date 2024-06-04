let $output_buffer = '';
function $flush_output() {
  console.log($output_buffer);
}
function $print_string(a) {
  $output_buffer += a;
  const last_nl_index = $output_buffer.lastIndexOf('\n');
  if (last_nl_index >= 0) {
    console.log($output_buffer.slice(0, last_nl_index));
    $output_buffer = $output_buffer.slice(last_nl_index + 1);
  }
}
const username$hello$lib$$log =  (o) => console.dir(o);
const username$hello$lib$$mw_default_js = (app) => app.use(async ctx => { ctx.body = {a:1};});;
const username$hello$lib$$listen_js = (app, port) => app.listen(port);
const username$hello$lib$$get_koa = () => require("koa");
const username$hello$lib$$create_koa = (claz) => new claz();
function moonbitlang$core$builtin$$println$0$(input) {
  $print_string(input);
  $print_string("\n");
}
function username$hello$lib$$Application$mw_default(self) {
  username$hello$lib$$mw_default_js(self);
  return self;
}
function username$hello$lib$$Application$listen(self, port) {
  username$hello$lib$$listen_js(self, port);
}
const username$hello$lib$$app = username$hello$lib$$create_koa(username$hello$lib$$get_koa());
function username$hello$lib$$hello() {
  username$hello$lib$$Application$listen(username$hello$lib$$Application$mw_default(username$hello$lib$$app), 8000);
  username$hello$lib$$log(username$hello$lib$$app);
  return "start server at http://127.0.0.1:8000 !";
}
(function () {
  moonbitlang$core$builtin$$println$0$(username$hello$lib$$hello());
}());
$flush_output();
