<template>

<div class="work">

  <Welcome/>

  <b-row>

    <router-link to="/portfolio" class="col-12 col-md-6 portfolio-item" tag="div">
      <img src="../assets/projects/nals/nals-thumb.png" alt="">
      <h4>Trend Micro - NALS</h4>
      <p>A mobile leave system app</p>
      <ul class="tags">
        <li>UI/UX</li>
        <li>Product Design</li>
        <li>App</li>
        <li>Illustration</li>
      </ul>
    </router-link>

    <b-col cols="12" md="6" class="portfolio-item">
      <img src="https://cdn.dribbble.com/users/368135/screenshots/3840460/timelog.gif" alt="">
      <h4>Title of the Project</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, debitis.</p>
      <ul class="tags">
        <li>UI/UX</li>
        <li>Front-End</li>
        <li>Illustration</li>
        <li>Web Design</li>
      </ul>
    </b-col>

    <b-col cols="12" md="6" class="portfolio-item">
      <img src="https://cdn.dribbble.com/users/368135/screenshots/3954976/diy-tool-d.gif" alt="">
      <h4>Title of the Project</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, debitis.</p>
      <ul class="tags">
        <li>UI/UX</li>
        <li>Product Design</li>
        <li>Illustration</li>
      </ul>
    </b-col>

    <b-col cols="12" md="6" class="portfolio-item">
      <img src="https://cdn.dribbble.com/users/368135/screenshots/3840460/timelog.gif" alt="">
      <h4>Title of the Project</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, debitis.</p>
      <ul class="tags">
        <li>UI/UX</li>
        <li>Front-End</li>
        <li>Illustration</li>
        <li>Web Design</li>
      </ul>
    </b-col>

  </b-row>

</div>

</template>

<script>
import Welcome from '@/components/Welcome'

export default {
  name: 'Work',
  components: {
    Welcome
  }
}
</script>
