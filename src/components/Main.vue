<template>
  <div>
    <Intro/>
    <div class="columns">
      <section class="column is-offset-5">
        <h3>Chillvi.be</h3>
        <h4>User Experience</h4>
      </section>
    </div>
  </div>
</template>

<script>
import Intro from './Intro.vue'

export default {
  name: 'Main',
  components: {Intro}
}
</script>

<style lang="sass" scoped>
  section
    z-index: 2
    
    h3
      font-weight: 700
      font-size: 45px

      margin: 0

    h4
      font-weight: 200
      font-size: 20px

      margin: 0
</style>
