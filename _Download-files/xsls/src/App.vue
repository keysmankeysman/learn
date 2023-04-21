<template>
  <div id="app">
    <router-link to="/first">first</router-link>
    <router-link to="/second">second</router-link>
    <router-link to="/third">third</router-link>

    <router-view class="app__router-view"></router-view>

    <button @click="download">Скачать эту таблицу xlsx</button>

  </div>
</template>

<script>
import exportToXLSX from './xlsxModule'

export default {

  data() {
    return {
      tableHeaders: [{
          text: "Идентификатор сессии",
          value: "sessionIdTime",
          type: "String",
          unit: null
      }, {
          text: "Дата начала",
          value: "startTime",
          type: "DateTime",
          unit: null
      }, {
          text: "Дата завершения",
          value: "endTime",
          type: "DateTime",
          unit: null
      }, {
          text: "Длительность",
          value: "duration",
          type: "DateTime",
          unit: null
      }],
      tableItems: [{
          sessionIdTime: "13805147852803425116",
          startTime: "15.02.2023 13:51:30",
          endTime: "15.02.2023 13:55:17",
          duration: "01.01.2000 00:03:47",
          id: 0
      }, {
          sessionIdTime: "3361003834243443059",
          startTime: "15.02.2023 13:53:14",
          endTime: "15.02.2023 13:55:15",
          duration: "01.01.2000 00:02:00",
          id: 1
      }, {
          sessionIdTime: "3361003834243443059",
          startTime: "15.02.2023 13:53:14",
          endTime: "15.02.2023 13:55:15",
          duration: "01.01.2000 00:02:00",
          id: 2
      }]
    }
  },
  components: {

  },
  methods: {
    download() {
      // const data = [{
        // "squadName": [ "Super hero squad", "hADA", "Hasss"]
        // "squadName": "Super hero squad"
      // }]
      // const data = [ 
        // { header: '1' }, {header: '2' }, { header2: '11' }, { header2: '22' }
      //   { header: '1' , header2: '2' }, 
      //   { header: '11', header2: '22' },
      //   { header: '12', header2: '33' }
      // ]

      console.log(this.tableItems)
      console.log(this.tableHeaders)


      // console.log('result:', result)

      let fls = true
      if (fls) { exportToXLSX(this.tableItems, 'новый файл.xlsx') }
    }
  },
  mounted() {
    if (this.$route.path !== '/first') {
      this.$router.push('/first')
    }
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
