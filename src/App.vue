<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <endlessLove msg="endlessLove, I'm coming"/>
    <Header></Header>
  </div>





</template>

<script>

import endlessLove from './components/endlessLove'
import Header from './components/header'

export default {
  name: 'App',
  components: {
    endlessLove,
    Header,

  }
}
</script>

<style>

</style>
