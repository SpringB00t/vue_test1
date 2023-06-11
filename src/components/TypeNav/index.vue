<template>
    <div class="outer">
        <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <div @mouseenter="searchShow" @mouseleave="searchShow">
                    <h2 class="all">全部商品分类</h2>
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item bo" v-for="(category1, index) of categoryList" :key="category1.categoryId"
                                @mouseenter="mouseOver(index)" @mouseleave="currentindex = -1"
                                :class="{ 'test': index === currentindex }">
                                <h3>
                                    <a href="javascript:;" :data-categoryName="category1.categoryName"
                                        :data-category1Id="category1.categoryId">{{ category1.categoryName }}</a>
                                </h3>
                                <div class="item-list clearfix"
                                    :style="{ 'display': index === currentindex ? 'block' : 'none' }">
                                    <div class="subitem">
                                        <dl class="fore" v-for="category2 of category1.categoryChild">
                                            <dt>
                                                <a href="javascript:;" :data-categoryName="category2.categoryName"
                                                    :data-category2Id="category2.categoryId">{{ category2.categoryName
                                                    }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="category3 of category2.categoryChild">
                                                    <a href="javascript:;" :data-categoryName="category3.categoryName"
                                                        :data-category3Id="category3.categoryId">{{ category3.categoryName
                                                        }}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
        </div>
    </div>
</template>
  
<script>

import { mapState } from 'vuex';

export default {
    name: "TypeNav",
    data() {
        return {
            currentindex: -1,
            show: this.$route.name != "search" && this.$route.name != "detail"
        }
    },
    computed: {
        ...mapState('home', ['categoryList']),
    }, methods: {
        mouseOver(index) {
            this.currentindex = index
        },
        goSearch(event) {
            //event.target:获取到的是出发事件的元素(div、h3、a、em、dt、dl)
            let node = event.target;
            //给a标签添加自定义属性data-categoryName,全部的字标签当中只有a标签带有自定义属性，别的标签名字----dataset纯属扯淡
            let {
                categoryname,
                category1id,
                category2id,
                category3id,
            } = node.dataset;
            //第二个问题解决了：点击的到底是不是a标签（只要这个标签身上带有categoryname）一定是a标签
            //当前这个if语句：一定是a标签才会进入
            if (categoryname) {
                //准备路由跳转的参数对象
                let loction = { name: "search" };
                let query = { categoryName: categoryname };
                //一定是a标签：一级目录
                if (category1id) {
                    query.category1Id = category1id;
                    //一定是a标签：二级目录
                } else if (category2id) {
                    query.category2Id = category2id;
                    //一定是a标签：三级目录
                } else {
                    query.category3Id = category3id;
                }
                //判断：如果路由跳转的时候，带有params参数，捎带脚传递过去
                if (this.$route.params) loction.params = this.$route.params;
                loction.query = query;
                //路由跳转
                this.$router.push(loction);
            }
        },
        searchShow() {
            if (this.$route.name == "search" || this.$route.name == "detail") this.show = !this.show
        },
    },
    mounted() {

    }

}
</script>

<style lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    // &:hover {
                    //     .item-list {
                    //         display: block;
                    //     }
                    // }
                }

                .test {
                    background-color: skyblue;
                }
            }
        }
    }
}
</style>