const state = {
  IsAuthenticated: false,
  User: {
    UserId: 'Lu',
    UserName: '',
    DisplayName: '',
    Avatar: '',
    Email: '',
    CompanyId: ''
  }
}

const mutations = {
  AUTH_ONLOGINED (state, user) {
    state.IsAuthenticated = true
    state.User.UserId = user.UserId
    state.User.UserName = user.UserName
    state.User.DisplayName = user.DisplayName
    state.User.Email = user.Email
    state.User.CompanyId = user.CompanyId
  },
  AUTH_ONLOGOUTED (state) {
    state.IsAuthenticated = false
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
