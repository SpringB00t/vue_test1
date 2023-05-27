<template>
    <div>
        <div>{{ name }}</div>
        <div>{{ age }}</div>
    </div>
</template>


<script>
    export default {
        name: "Student",
        data () {
            return {
                name: "肖举",
                age: 25
            }
        }
    }
</script>