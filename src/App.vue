<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" :todos="todos"/>
        <List
            :todos="todos" :deleteItem="deleteItem"

        />
        <MyFooter
            :todos="todos" :deleteTodos="deleteTodos"

        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import List from "@/components/List";
import MyFooter from '@/components/MyFooter';
export default {
  name: "App",
  components:{
    List,
    MyFooter,
    MyHeader
  },
  data() {
    return {
      todos: [
        {id: '001', title: '吃饭', done: true},
        {id: '002', title: "睡觉", done: true},
        {id: '003', title: '打代码', done: true}
      ]
    }
  },
  methods:{
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    deleteTodos() {
      this.todos = this.todos.filter(item => !item.done)
    },
    deleteItem(key) {
      this.todos = this.todos.filter(item => item.id != key)
    },
    parentAll(flg) {
      this.todos.forEach(item => item.done = flg);
    }
  },
  // computed: {
  //   test() {
  //     console.log(1)
  //     return this.todos.every(item => item.done);
  //   }
  // }

}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>


