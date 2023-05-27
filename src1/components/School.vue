<template>
    <div>
        <div class="red">{{ name }}</div>
        <div class="red">{{ adress }}</div>
    </div>
</template>


<script>
    export default {
        name: "School",
        data () {
            return {
                name: "养猪中专",
                adress: "中国湖南"
            }
        }
    }
</script>

<style>
    .red{
        background-color: red;
    }
</style>