const com = require['context']('./', false, /\.vue$/);

export const componentKeys = com.keys().map(item => {
  return   [com(item).default.name,com(item).default.cName]
})

export default {
  install(app: any) {
    com.keys().forEach(item => {
      app.component(com(item).default.name, com(item).default)
    })
  }
}




