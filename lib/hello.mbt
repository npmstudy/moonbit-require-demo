extern "js" fn log(o : Application) =
  #| (o) => console.dir(o)

pub fn hello() -> String {
  // println(get_pi())
  let koa = app

  // let a = koa.mw_default()
  koa.mw_default().listen(8000)
  log(koa)
  "start server at http://127.0.0.1:8000 !"
}
