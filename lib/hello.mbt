pub type ApplicationClass

extern "js" fn get_koa() -> ApplicationClass =
  #|() => require("koa")

pub type Application

extern "js" fn create_koa(clazz : ApplicationClass) -> KoaApplication =
  #|(claz) => new claz()

pub let app : KoaApplication = create_koa(get_koa())

extern "js" fn log(o : KoaApplication) =
  #| (o) => console.dir(o)

struct KoaApplication {
  _eventsCount : Int
  proxy : Bool
  // middleware : Array[Int]
} derive(Debug)
// Application {
//   _events: [Object: null prototype] {},
//   _eventsCount: 0,
//   _maxListeners: undefined,
//   proxy: false,
//   subdomainOffset: 2,
//   proxyIpHeader: 'X-Forwarded-For',
//   maxIpsCount: 0,
//   env: 'development',
//   middleware: [],
//   context: {},
//   request: {},
//   response: {},
//   [Symbol(kCapture)]: false,
//   [Symbol(nodejs.util.inspect.custom)]: [Function: inspect]
// }

pub fn hello() -> String {
  // println(get_pi())
  let koa : KoaApplication = create_koa(get_koa())
  println(koa._eventsCount)
  "Hello, world!"
}
