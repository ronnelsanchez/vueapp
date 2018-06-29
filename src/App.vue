<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line
import Normalize from 'normalize.css/normalize.css'

// eslint-disable-next-line
import SimpleLineIcons from 'simple-line-icons/css/simple-line-icons.css'

export default {
  name: 'app'
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,900')
  @import "../node_modules/bulma/sass/utilities/mixins.sass"
  @import "../node_modules/bulma/sass/grid/columns.sass"

  body
    overflow-x: hidden

  #app
    font-family: 'Poppins', sans-serif
</style>
