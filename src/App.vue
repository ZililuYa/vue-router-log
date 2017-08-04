<template>
  <div id="app">

    <router-view></router-view>
    Page:  <a href="/#/">首页</a> | <a href="/#/list">列表</a> | <a href="/#/news">新闻</a>
    <div style="padding: 0 100px">
      <hr>
      <br>
      当前记录：
      <b>{{log.log}}</b>
      <br>
      <br>
      当前位置：{{log.now}}
      <br>
      <hr>
    </div>
    <div class="">
      <button :disabled="!log.backActive" @click="PAGE_BACK($router)">← 后退</button>
      <button :disabled="!log.forwardActive" @click="PAGE_FORWARD($router)">前进 →</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'app',
    mounted () {
      console.log()
      this.$router.beforeEach((to, from, next) => {
        if (this.log.isBackBtn) {
          this.PAGE_ISCHANG()
        } else {
          this.RECORD(to)
        }
        console.log(this.log)
        next()
      })
    },
    computed: mapState({
      log: state => state.log
    }),
    methods: {
      ...mapActions([
        'RECORD',
        'PAGE_BACK',
        'PAGE_FORWARD',
        'PAGE_ISCHANG'
      ])
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
