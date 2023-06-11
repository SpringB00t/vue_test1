import { reqSearchInfo } from "@/api";


const state = {
    searchList: {},

}
const mutations = {
    GETSEARCHINFO(state, searchList) {
        state.searchList = searchList;
    },
}
const actions = {
    async getSearchInfo({commit}, params) {
        params = params || {}
        let result = await reqSearchInfo(params);
        if (result.code == 200) {
          commit("GETSEARCHINFO", result.data);
        }
    },
    
}
const getters = {
    goodsList(state){
      return state.searchList.goodsList||[];
    },
    trademarkList(state){
      return state.searchList.trademarkList||[];
    },
    attrsList(state){
      return state.searchList.attrsList||[];
    }
 };

export default {
    namespaced:true,//开启命名空间
    state,
    mutations,
    actions,
    getters
}