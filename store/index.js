/* eslint-disable */
import axios from 'axios';

export const state = () => ({
    vehicules: [],
})

export const getters = {
    allVehicules: (state) => state.vehicules,
    getVehiculeById: (state) => (id) => {
        return state.vehicules.find(vehicule => vehicule.id == id)
    },

    filteredVehiclesForLocation: (state) => {
        return state.vehicules.filter((vehicule) => {
            return vehicule.vehicle_location_city
                .toLowerCase()
                .match(this.searchLocation.toLowerCase())
        })
    }

}

export const actions = {
    async getVehicules({ commit }) {
        await axios.get(
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
