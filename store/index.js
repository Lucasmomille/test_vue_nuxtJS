/* eslint-disable */
import axios from 'axios';

export const state = () => ({
    vehicules: [],
})

export const getters = {
    allVehicules: (state) => state.vehicules,
    getVehiculeById: (state) => (id) => {
        return state.vehicules.find(vehicule => vehicule.id == id)
    }
}

export const actions = {
    getVehicules({ commit }) {
        axios.get(
            'https://gitlab.com/api/v4/snippets/2095016/raw'
        ).then(response => {
            let data = response.data.results;
            commit('SET_VEHICULES', data)
        })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const mutations = {
    SET_VEHICULES(state, vehicules) {
        state.vehicules = vehicules
    }
}
