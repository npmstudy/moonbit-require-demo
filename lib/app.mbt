pub type ApplicationClass

extern "js" fn get_koa() -> ApplicationClass =
  #|() => require("koa")

pub type Application

extern "js" fn create_koa(clazz : ApplicationClass) -> Application =
  #|(claz) => new claz()

extern "js" fn listen_js(app : Application, port : Int) -> Unit =
  #|(app, port) => app.listen(port)

extern "js" fn mw_default_js(app : Application) -> Unit =
  #|(app) => app.use(async ctx => { ctx.body = {a:1};});

pub let app : Application = create_koa(get_koa())

pub fn mw_default(self : Application) -> Application {
  mw_default_js(self)
  self
}

pub fn listen(self : Application, port : Int) -> Unit {
  listen_js(self, port)
}
