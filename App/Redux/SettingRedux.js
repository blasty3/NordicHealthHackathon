import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({

  setDataSource: ['dataSource'],
  setDataView: ['dataView']

})

export const SettingTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  dataSource: null,
  dataView: null,
  fetching: false,
})

/* ------------- Reducers ------------- */

// dataSource =================================================================================
export const setDataSource = (state, action) => {
  var {dataSource} = action
  return state.merge({dataSource: dataSource})
}

// DataView =================================================================================
export const setDataView = (state, action) => {
  var {dataView} = action
  return state.merge({dataView: dataView})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_DATA_SOURCE]: setDataSource,

  [Types.SET_DATA_VIEW]: setDataView,

})
