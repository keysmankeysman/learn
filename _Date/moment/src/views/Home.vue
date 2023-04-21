<template>
  <div class="home">
    {{ date  }}
    <button @click="getDate">Показать кнопку</button>
  </div>
 </template>
 
<script>
 export default {
   name: 'home',
    components: {},
    data() {
      return {
        dateStart: '03-04-2023T00:00',
        dateEnd: '22-04-2023T23:59'
      }
    },
    methods: {
      getDate() {
        console.log('кнопка')
        console.log(this.dateStart)
        console.log(this.dateEnd)
      }
    }
    
 }
</script>
 
