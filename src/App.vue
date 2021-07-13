<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <TodoList></TodoList>


<!--    <endlessLove msg="endlessLove, I'm coming"/>-->
<!--    <Header></Header> <br/><br/>-->
<!--    <h1>安装目标机器</h1>-->
<!--    <Nginx></Nginx>-->
<!--    <hiax></hiax>-->

<!--    <N404></N404>-->
  </div>





</template>

<script>

import endlessLove from './components/endlessLove'
import Header from './components/header'
import Nginx from "@/components/nginx"
import TodoList from './components/TodoList'
import hiax from './components/hiax'
// import N404  from  '@/components/404'


export default {
  name: 'App',
  components: {
    // Nginx,
    // endlessLove,
    // Header,
    TodoList,
    // hiax,



  }
}
</script>

<style>

</style>
