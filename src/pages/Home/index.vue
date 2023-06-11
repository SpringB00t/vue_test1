<template>
    <div>
        <TypeNav />
        <ListContainer/>
        <Recommend />
        <Brand />
        <Floor v-for="floor of floorList" :floor="floor" :key="floor.id"/>
        <Like />
        <Rank />
    </div>
</template>
  
<script>
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from "@/pages/Home/Recommend"
import Brand from "@/pages/Home/Brand"
import Floor from "@/pages/Home/Floor"
import Like from "@/pages/Home/Like"
import Rank from "@/pages/Home/Rank"
import { mapState } from 'vuex';

export default {
    name: "Home",
    components: {
        ListContainer, Recommend, Brand, Floor, Like, Rank
    },
    computed: {
        ...mapState('home', ['floorList']),
    },
    mounted() {
        this.$store.dispatch("home/getFloorList");
        
    },
    
}
</script>

<style></style>

