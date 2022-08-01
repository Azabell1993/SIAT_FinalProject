<template>

<form>
    <input type="file" id="imgFile" v-on:change="filesrc">
    <img v-bind:src="slc2">
     <p>{{slc2}}</p>
</form>

</template>

<script>
let slc3=''

export default {
    data () {
        return {
            slc2:slc3
        }
    },
    methods: {
        filesrc (event) {
            let file = event.target.files[0]
            this.slc2 = window.URL.createObjectURL(file)
            console.log('파일 정보 : ',file)
        }
    }
}
</script>

<style>

</style>