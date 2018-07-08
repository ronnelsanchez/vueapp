<template>

<header class="header">
  <b-container>
    <b-row class="header-content">
      <div class="brand">
        <b-link to="/" exact>
          <img src="../assets/img/rs.svg" alt="" class="logo">
        </b-link>
      </div>
      <div class="container_top-nav">
        <ul class="top-nav list-inline float-right">
          <li class="list-inline-item"><b-link :to="{ path: '/' }" exact>Work</b-link></li>
          <li class="list-inline-item"><b-link :to="{ path: '/about' }" exact>About</b-link></li>
          <li class="list-inline-item"><b-link href="https://dribbble.com/ronnelsanchez">Dribbble</b-link></li>
          <li class="list-inline-item"><b-link href="https://www.behance.net/ronnelsanchez">Behance</b-link></li>
          <li class="list-inline-item"><b-link href="https://ph.linkedin.com/in/ronnelsanchez">Linkedin</b-link></li>
          <li class="list-inline-item"><b-link href="mailto:ronnel.sanchez@gmail.com">Contact</b-link></li>
        </ul>
      </div>
    </b-row>
  </b-container>
</header>

</template>

<script>
export default {
  name: 'header'
}
</script>
