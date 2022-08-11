import apiStates from './constants/apiStates'

const actions = {
    async login({state, env}, info) {
        state.loginState = apiStates.LOADING
        const user = await fetch("/user.json", {
            info
        })
        const isError = info.email !== "example@test.com" || info.password !== "test"
        if (isError) {
            state.loginState = apiStates.ERROR
            state.errorMsg = "Incorrect Password"
        } else {
            state.user = await user.json()
            state.loginState = apiStates.SUCCESS
            env.router.navigate({ to: "DASHBOARD" })
        }
    },
    async logout({state, env}) {
        env.router.navigate({ to: "LOGIN" })
        state.user = null
    },
}

const state = {
    loginState: null,
    errorMsg: "",
    user: null,
}

export default {
    actions,
    state
}
