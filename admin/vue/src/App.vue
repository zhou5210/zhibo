<template>
  <div id="app">
    <iheader>{{ Iheader }}</iheader>
	<imenu>{{ Imenu }}</imenu>
    <router-view>{{ Ifooter }}</router-view>
  </div>
</template>

<script>
import Iheader from './components/header'
import Imenu from './components/menu'
import Ifooter from './components/footer'

export default {
  name: 'app',
  components: {
     Iheader,Imenu,Ifooter
  }
   
}
</script>

<style>

</style>