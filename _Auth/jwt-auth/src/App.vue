<template>
  <div id="app">
    <router-link to="/fruits">fruits</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/registration">registration</router-link>

    <router-view class="app__router-view"></router-view>
  </div>
</template>

<script>


export default {

  data() {
    return {

    }
  },
  components: {

  },
  methods: {

  },
  mounted() {

  }
}



</script>


<style lang="scss">
#app a {
  color: #1b344f;
  text-decoration: none;
  margin-right: 16px;
  font-family: Arial, sans-serif;
}

.main {
  margin-left: 45px;
  margin-top: 20px;
}

.router-link-exact-active {
  color: #1f73cb !important;
  border-bottom: 1px solid #1f73cb;
}

.app__router-view {
  margin-top: 25px;
}


</style>
