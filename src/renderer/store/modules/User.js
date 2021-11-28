const state = {
  IsLogined: false,
  Token: '',
  UserId: '',
  UserName: '',
  DisplayName: '',
  Avatar: '',
  Email: '',
  CompanyId: ''
}

const mutations = {
  AUTH_ONLOGINED (state, user) {
    state.IsLogined = true
    state.Token = user.Token
    state.UserId = user.UserId
    state.UserName = user.UserName
    state.DisplayName = user.DisplayName
    state.Avatar = user.Avatar
    state.Email = user.Email
    state.CompanyId = user.CompanyId
  },
  AUTH_ONLOGOUTED (state) {
    state.IsLogined = false
  }
}

const actions = {
  onLogined ({ commit }, user) {
    commit('AUTH_ONLOGINED', user)
  },
  onLogouted ({ commit }) {
    commit('AUTH_ONLOGOUTED')
  }
}

const getters = {
  isAuthenticated: state => {
    return state.IsLogined && state.Token !== ''
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
