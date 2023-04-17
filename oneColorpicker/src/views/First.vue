<template>
    <div>
        <h2>First</h2> 
        <color-picker v-model="color" @change="changeColor($event)"></color-picker>
    </div>
</template>

<script>
import {ColorPicker} from 'one-colorpicker'

export default {
    name: 'first',
    components: {
      ColorPicker,
    },
    data() {
        return {
          color: '#eee' 
        }
    },
    methods: {
        changeColor(event) {
            console.log('поменяли цвет')
            console.log(event)
        }
    },

}
</script>