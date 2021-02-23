import AuthService from '../auth/auth-service';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user ? {status: {loggedIn: true}, user} :
    {status: {loggedIn: false}, user: null};


export const auth = {
    namespaced: true,
    state: initialState,
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
        passwordResetSuccess(state) {
            state.status.loggedIn = false
        },
        passwordResetFailure(state) {
            state.status.loggedIn = false
        },
        sendEmailSuccess(state) {
            state.status.loggedIn = false
        },
        sendEmailFailure(state) {
            state.status.loggedIn = false
        },
        passwordResetEmailSuccess(state) {
            state.status.loggedIn = false
        },
        passwordResetEmailFailure(state) {
            state.status.loggedIn = false
        },
        verifyEmailRequest(state) {
            state.status.loggedIn = false
            state.status = {verifying: true}
        },
        verifyEmailSuccess(state, data) {
            state.status.loggedIn = false
            state.status = {verified: true, data};
        },
        verifyEmailFailure(state, error) {
            state.status.loggedIn = false
            state.status = {verificationFailed: true, error};
        }
    },
    actions: {

        login({commit}, user) {
            return AuthService.login(user).then(user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({commit}) {
            AuthService.logout();
            commit('logout')
        },
        register({commit}, user) {
            return AuthService.register(user).then(response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                })
        },
        resetPassword({commit}, user) {
            console.log("requested data: ", user)
            return AuthService.passwordReset(user).then(user => {
                    commit('passwordResetSuccess');
                    return Promise.resolve(user.data);
                },
                error => {
                    commit('passwordResetFailure');
                    return Promise.reject(error);
                })
        },
        activationEmail({commit}, emailRequest) {
            return AuthService.activationEmail(emailRequest).then(emailRequest => {
                    commit('sendEmailSuccess');
                    return Promise.resolve(emailRequest.data);
                },
                error => {
                    commit('sendEmailFailure');
                    return Promise.reject(error);
                })
        },
        passwordResetEmail({commit}, emailRequest) {
            return AuthService.passwordResetEmail(emailRequest).then(emailRequest => {
                    commit('passwordResetEmailSuccess');
                    return Promise.resolve(emailRequest.data);
                },
                error => {
                    commit('passwordResetEmailFailure');
                    return Promise.reject(error);
                })
        },
        verifyEmail({commit}, token) {
            console.log("token mutate: ", token)
            commit('verifyEmailRequest');
            return AuthService.verifyToken(token).then(token => {
                commit('verifyEmailSuccess')
                return Promise.resolve(token.data)
            }, error => {
                commit('verifyEmailFailure')
                return Promise.reject(error);
            })
        }
    }
}