import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import log from './modules/log.js'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    log
  },
  strict: isDev,
  plugins: isDev ? [logger()] : []
})
