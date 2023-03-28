export default {
    state: {
        slider: []
    },
    mutations: {
        SET_SLIDER (state, payload) {
            state.slider = payload
        },
        
    },
    actions: {
        SET_SLIDER ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_SLIDER', payload)
        },
        GET_SLIDER_FROM_API({commit}) {
            return fetch("https://picsum.photos/v2/list")
            .then((response) => response.json())
            .then((data) => {
                const newData = data.map(item => {
                    item.selected = false
                    return item;
                  })
                commit('SET_SLIDER', newData)
                return newData
            }).catch((error) => {
                console.log(error)
                return error
            });
        }
    },
    getters: {
        SLIDER (state) {
            return state.slider
        },
    },
    modules: {
    }
}