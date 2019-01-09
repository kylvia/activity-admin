import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission' // permission control
import '@/styles/fonts.less'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less' // global css
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh_CN'
})
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  errorBagName: 'errorBags', // change if property conflicts.
  fieldsBagName: 'fieldBags',
  dictionary: {
    zh
  }
})
const dict = {
  messages: {
    required: (field) => `${field}不能为空`,
    between: (field, data) => `${field}必须在${data[0]}~${data[1]}之间`,
    confirmed: (field, data) => `${field}必须与${data[0]}相匹配`,
    max: (field, data) => `${field}最大长度不能超过${data[0]}`,
    min: (field, data) => `${field}最小长度不能小于${data[0]}`,
    digits: (field, data) => `${field}必须为数字，且长度必须等于${data[0]}`,
    min_value: (field, data) => `${field}数值不能小于${data[0]}`,
    max_value: (field, data) => `${field}数值不能大于${data[0]}`,
    not_in: (field, data) => `${field}不能为${data.join(',')}`
  }
}
const validator = new Validator({})
validator.localize('zh_CN', dict)

// 字符长度校验
validator.extend('minMax', {
  messages: {
    zh_CN: (field, data) => `${field}长度必须在${data[0]}~${data[1]}之间`
  },
  validate: (value, data) => {
    return value.length >= parseInt(data[0]) && value.length <= parseInt(data[1])
  }
})
// 密码校验
validator.extend('password', {
  messages: {
    zh_CN: (field, data) => `${field}长度必须在${data}`
  },
  validate: (value, data) => {
    return value.length > parseInt(data)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
