<template>
  <div>
    <div class="header">
      <Floaters/>
      <div class="header-copy">
        <img src="../assets/personal-logo.svg" alt="Yamilah Atallah's personal logo.">
        <section>
          <h1>Yamilah Atallah</h1>
          <h2>Designer & Developer</h2>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Floaters from './Floaters.vue'

export default {
  name: 'Intro',
  components: {Floaters}
}
</script>

<style lang="sass" scoped>
  .header
    resize: both
    position: relative
    width: 100%
    height: 100vh

    .header-copy
      @keyframes scale
        0%
          transform: translate(-50%, -50%) scale(1.2)
          opacity: 0
        100%
          transform: translate(-50%, -50%) scale(1)
          opacity: 1

      display: flex
      position: absolute
      left: 50%
      top: 50%
      animation: scale 2s .5s cubic-bezier(0.18, 0.98, 0.45, 1) forwards
      animation-delay: 0.6s
      opacity: 0

      img
        align-self: flex-start
        padding: 19px 50px 0 0
        width: 127px

      section
        display: flex
        flex-direction: column

        h1
          text-transform: uppercase
          font-weight: 900
          font-size: 60px
          width: 331px
          letter-spacing: 6px
          line-height: 1.4

          margin: 0

        h2
          font-weight: 300
          font-size: 30px

          margin: 0
          padding-top: 10px

</style>
