<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <endlessLove msg="endlessLove, I'm coming"/>
  </div>
</template>

<script>

import endlessLove from './components/endlessLove'

export default {
  name: 'App',
  components: {
    endlessLove,

  }
}
</script>

<style>

</style>
