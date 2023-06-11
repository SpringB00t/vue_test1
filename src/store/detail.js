import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";


const state = {
  goodsList: [],

}
const mutations = {
  GETGOODSINFO(state, goodsList) {
    goodsList.spuSaleAttrList.forEach(group => {
      // if (groupId == group.baseSaleAttrId) {
      //   group.spuSaleAttrValueList.forEach(attr => {
      //     attr.isChecked = "0";
      //     if (attr.id == attrId) attr.isChecked = "1";
      //   })
      // }
      group.spuSaleAttrValueList.forEach((attr, index) => {
        attr.newCheck = "0"
        if (index == 0) attr.newCheck = "1"
      })
    });
    state.goodsList = goodsList;
  },
  CHANGEATTR(state, {groupId, attrId},a,b) {
    console.log(groupId, attrId,a,b)
    state.goodsList.spuSaleAttrList.forEach(group => {
      if (groupId == group.baseSaleAttrId) {
        group.spuSaleAttrValueList.forEach(attr => {
          attr.newCheck = "0";
          if (attr.id == attrId) attr.newCheck = "1";
        })
      }
    });
  }
}
const actions = {
  async getGoodsInfo({ commit }, params) {
    let result = await reqGoodsInfo(params);
    if (result.code == 200) {
      commit("GETGOODSINFO", result.data);
    }
  },
  async addOrUpdateShopCart({ commit }, params) {
    let result = await reqAddOrUpdateShopCart(params.skuId, params.skuNum);
    if (result.code == 200) {
      return "OK"
    } else {
      return Promise.reject()
    }
  }
  
}
const getters = {
  categoryView(state) {
    return state.goodsList.categoryView || {};
  },
  price(state) {
    return state.goodsList.price;
  },
  skuInfo(state) {
    return state.goodsList.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodsList.spuSaleAttrList || [];
  },
  valuesSkuJson(state) {
    return state.goodsList.valuesSkuJson;
  }
};

export default {
  namespaced: true,//开启命名空间
  state,
  mutations,
  actions,
  getters
}