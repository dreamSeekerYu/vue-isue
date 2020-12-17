const com = require['context']('./', false, /\.vue$/);

export const componentKeys = com.keys().map(item => {
  return  [com(item).default.name,com(item).default.cName]
})


export default {
  install(Vue) {
    com.keys().forEach(item => {
      // console.log(com(item))
      Vue.component(com(item).default.name, com(item).default)
    })
  }
}