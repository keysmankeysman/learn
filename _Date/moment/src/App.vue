<template>
  <div id="app">
    {{ result }}
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
        dateEnd: '22-04-2023T23:59',
        result: ''
      }
    },
    methods: {
      getDate() {
        console.log('кнопка')
        console.log(this.dateStart)
        console.log(this.dateEnd)
        // this.result = this.$moment(this.dateStart, "DD-MM-YYYYTHH:mm", true).isValid()
        console.log(this.$moment(this.dateStart, "DD-MM-YYYYTHH:mm", true).isValid())
      }
    }
    
 }
</script>


<style lang="scss">


</style>
