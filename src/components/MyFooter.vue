<template>
  <!--隐式类型转换-->
  <div class="todo-footer" >
    <label>
      <input type="checkbox" v-model="flg" @change="ccc"/>
    </label>
    <span>
       <span>已完成{{ todos.filter(item => item.done).length }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="this.deleteTodos">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  data () {
    return {
      flg: this.todos.every(item=>item.done)
    }
  },
  props: ['todos','deleteTodos'],
  computed: {
    allCheck:{
      get(){
        return this.todos.every(item=>item.done); 
      },
      set(value){
        this.$parent.parentAll(value);
      }
    }
  },
  watch: {
    todos:{
      handler(newVal){
        this.flg = this.todos.every(item=>item.done); 
      },
      deep: true
	  }
  },
  methods: {
    ccc() {
      console.log(this.flg)
      this.$parent.parentAll(this.flg);
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
