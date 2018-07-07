<template>
  <div class="app">
    <Header/>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Main',
  components: {
    Header
  }
}
</script>
