const PullUpComponent = require('./PullUp.vue')
const pullUp = {
  install: function(Vue) {
    Vue.component('pullUp', PullUpComponent)
  }
}
module.exports = pullUp

