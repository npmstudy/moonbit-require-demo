pub type ApplicationClass

extern "js" fn get_koa() -> ApplicationClass =
  #|() => require("koa")

pub type Application

extern "js" fn create_koa(clazz : ApplicationClass) -> Application =
  #|(claz) => new claz()

pub let app : Application = create_koa(get_koa())

extern "js" fn log(o:Application) =
  #| (o) => console.dir(o)

pub fn hello() -> String {
  // println(get_pi())
  let koa = create_koa(get_koa())
  log(koa)
  "Hello, world!"
}
