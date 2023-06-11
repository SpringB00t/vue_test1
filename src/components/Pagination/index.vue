<template>
  <div class="pagination">
    <!-- 上 -->
    <button :disabled="pageNo == 1" @click="setPage('change',-1)">
      上一页
    </button>
    <button :class="{ active: pageNo == 1 }" @click="setPage('set', 1)">
      1
    </button>
    <button v-show="pageNo > 4">···</button>
    <!-- 中间部分 -->
    <button v-for="bt of mids" :class="{ active: pageNo == bt }" @click="setPage('set', bt)">
      {{ bt }}
    </button>

    <!-- 下 -->
    <button v-show="pageNo + 3 < totalPages">···</button>
    <button :class="{ active: pageNo == totalPages }" @click="setPage('set', totalPages)">
      {{ totalPages }}
    </button>
    <button :disabled="pageNo == totalPages" @click="setPage('change',1)">
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "totalPages", "pageSize", "total"],
  computed: {
    mids() {
      let midArray = [this.pageNo - 2, this.pageNo - 1, this.pageNo, this.pageNo + 1, this.pageNo + 2];
      midArray = midArray.filter(item => item >= 1 && item <= this.totalPages)
      if (midArray.length == 3) {
        if (midArray[0] == this.pageNo) {
          midArray.push(...[this.pageNo + 3, this.pageNo + 4])
        } else if (midArray[2] == this.pageNo) {
          midArray.unshift(...[this.pageNo - 4, this.pageNo - 3])
        }
      } else if (midArray.length == 4) {
        if (midArray[1] == this.pageNo) {
          midArray.push(...[this.pageNo + 3])
        } else if (midArray[2] == this.pageNo) {
          midArray.unshift(...[this.pageNo - 3])
        }
      }
      midArray = midArray.filter(item => item > 1 && item < this.totalPages)
      return midArray
    }
  },
  methods: {
    setPage(key, num) {
      let currentPage;
      if (key == "set") {
        currentPage = num;
      } else if (key == "change") {
        currentPage = this.pageNo + num;
      }
      this.$emit("searchByPage",currentPage)
    }
  }

};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}

.active {
  background: skyblue;
}
</style>
