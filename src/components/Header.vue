<template>
    <b-container>
      <b-row>
        <b-col>
          <span>Logo</span>
          <ul class="list-inline float-right">
            <li class="list-inline-item"><b-link :to="{ path: '/' }">Work</b-link></li>
            <li class="list-inline-item"><b-link :to="{ path: 'about' }">About</b-link></li>
            <li class="list-inline-item">Lorem</li>
            <li class="list-inline-item">Lorem</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'header'
}
</script>
