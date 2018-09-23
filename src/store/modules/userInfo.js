const state = {
    usreInfo: {}
}

const getters = {
    usreInfo: (state, getters, rootState)=> {
        return state.usreInfo;
    }
}

const actions = {
    setUserInfo({ commit }, userInfo) {
        commit('setUserInfo', userInfo)
    }
}

const mutations = {
    setUserInfo(state, userInfo) {
        state.usreInfo = userInfo
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}