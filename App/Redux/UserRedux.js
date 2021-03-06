import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({

    login: ['user'],
    loginSuccess: ['user'],
    loginFailure: ['messageError'],

    register: ['user'],
    signUpSuccess: ['user'],
    signUpFailure: ['messageError'],

    forgetUserPasswordRequest: ['params'],
    forgetUserPasswordSuccess: ['data'],
    forgetUserPasswordFailure: ['message'],

    resetUserPasswordRequest: ['params'],
    resetUserPasswordSuccess: ['data'],
    resetUserPasswordFailure: ['message'],

    updateUserPasswordRequest: ['params'],
    updateUserPasswordSuccess: ['data'],
    updateUserPasswordFailure: ['message'],

    userResetData: []

})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    user: null,
    fetching: false,
})

/* ------------- Reducers ------------- */

// LOGIN =================================================================================
export const login = (state, action) => {
    var { user } = action
    // if( user.password &&  state.user && state.user.email && user.email === state.user.email ){
    //     return state.merge({ loggedIn: true, errorLogin:false})
    // }
    // return state.merge({ loggedIn: false, errorLogin:true})
  return state.merge({ loggedIn: true, errorLogin:false})
}

// SIGN UP =================================================================================
export const register = (state, action) => {
    var { user } = action
    return state.merge({ user: user })
}


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN]: login,


    [Types.REGISTER]: register,

})
