const state = {
  IsAuthenticated: false,
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
    state.IsAuthenticated = true
    state.Token = user.Token
    state.UserId = user.UserId
    state.UserName = user.UserName
    state.DisplayName = user.DisplayName
    state.Avatar = user.Avatar
    state.Email = user.Email
    state.CompanyId = user.CompanyId
  },
  AUTH_ONLOGOUTED (state) {
    state.IsAuthenticated = false
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

export default {
  state,
  mutations,
  actions
}
