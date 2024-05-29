let $output_buffer = '';
function $flush_output() {
  if ($output_buffer.length > 0) {
    console.log($output_buffer);
  }
}
function $print_string(a) {
  $output_buffer += a;
  const last_nl_index = $output_buffer.lastIndexOf('\n');
  if (last_nl_index >= 0) {
    console.log($output_buffer.slice(0, last_nl_index));
    $output_buffer = $output_buffer.slice(last_nl_index + 1);
  }
}
const username$hello$lib$$get_koa = () => require("koa");
const username$hello$lib$$create_koa = (claz) => new claz();
const username$hello$lib$$log = (o) => console.dir(o);
function moonbitlang$core$builtin$$println$0$(input) {
  $print_string(input);
  $print_string("\n");
}
function username$hello$lib$$hello() {
  const koa = username$hello$lib$$create_koa(username$hello$lib$$get_koa());
  username$hello$lib$$log(koa);
  return "Hello, world!";
}
(function () {
  moonbitlang$core$builtin$$println$0$(username$hello$lib$$hello());
}());
$flush_output();
