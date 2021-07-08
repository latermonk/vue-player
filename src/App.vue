<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <endlessLove msg="endlessLove, I'm coming"/>
    <Header></Header> <br/><br/>
    <h1>安装目标机器</h1>
    <Nginx></Nginx>
<!--    <N404></N404>-->
  </div>





</template>

<script>

import endlessLove from './components/endlessLove'
import Header from './components/header'
import Nginx from "@/components/nginx"
// import N404  from  '@/components/404'

export default {
  name: 'App',
  components: {
    Nginx,
    endlessLove,
    Header,
    // N404,
    
  }
}
</script>

<style>

</style>
