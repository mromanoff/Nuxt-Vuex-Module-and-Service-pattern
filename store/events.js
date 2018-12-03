import EventService from '@/services/EventService'
import { GET_EVENTS } from '@/store/mutation-types'

export const state = () => ({
  eventList: []
})

export const mutations = {
  [GET_EVENTS](state, { data }) {
    state.eventList = data
  }
}

export const getters = {
  getEvents(state) {
    return state.eventList
  }
}

export const actions = {
  fetchEvents({ state, commit }) {
    //commit('toggleLoading')
    // axios.get(`${URL}/api/images`).then(res => {
    //   commit('toggleLoading')
    //   state.images = res.data
    // })

    EventService.getEvents().then(response => {
      commit('GET_EVENTS', response)
    })
  }
}
