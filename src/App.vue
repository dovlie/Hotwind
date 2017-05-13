<template>
  <div id="app">
      <v-header></v-header>
      <div class="tab border-1px">
          <div class="tab-item">
              <router-link to="/inland">国内
              </router-link>
          </div>
          <div class="tab-item">
              <router-link to="/foreign">国外
              </router-link>
          </div>
      </div>
      <div class="content">
          <router-view></router-view>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">

import header from './components/header/header.vue'

export default {
  components: {
    'v-header': header
  }
}

</script>

<style rel="stylesheet/scss" lang="scss">
  #app {
    .tab {
      display: flex;
      width: 100%;
      height: 60px;
      line-height: 40px;
        .tab-item {
          line-height: 60px;
          flex: 1;
          text-align: center;
          a {
            text-decoration: none;
            color: #fff;
            &:hover {
              color: #ffc;
            }
          }
        }
      background: #c33;
    }
  }
</style>
