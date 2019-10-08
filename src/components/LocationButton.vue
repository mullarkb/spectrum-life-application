<template>
    <b-button @click="selectLocation">{{location.name}}</b-button>
</template>

<script>
    export default {
        name: "LocationButton",
        props:{
            location: Object,
        },
        methods:{
            selectLocation(){
                this.$store.dispatch("selectLocation", this.location.id)
            }
        }
    }
</script>

<style scoped>

</style>