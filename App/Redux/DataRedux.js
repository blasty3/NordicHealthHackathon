import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setDevice: ['device'],
  

  //getDataTodayRequest:["params"],
 // getDataTodaySuccess:['data'],
  //getDataTodayFailure:[],

  

  //setMoodRequest: ['mood']


})

export const DeviceTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  device: null,
  stepsGoal: 10000,
  distanceGoal: 5,
  caloriesGoal: 3000,
  heartGoal: 90,
  sleepGoal: 480,
 
})

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

//
export const setDevice = (state, { device }) => {
  return state.merge({ fetching: true, device: device })
}

/*
export const setSettingCompleted = (state, action) => {
  let  {isSettingCompleted} = action;
  return state.merge({ fetching: true, isSettingCompleted: isSettingCompleted })
}

export const setLastSynced = (state, { date }) => {
  return state.merge({ fetching: true, lastSynced: date})
}

export const setGoal = (state, action) => {
  let { stepsGoal, distanceGoal, caloriesGoal, sleepGoal } = action.goalData;
  return state.merge({ fetching: true, stepsGoal: stepsGoal, distanceGoal: distanceGoal, caloriesGoal: caloriesGoal, sleepGoal: sleepGoal })
}

export const setUser = (state, action) => {
  let { user } = action;
  return state.merge({ fetching: true,user:user })
}

export const setLanguage = (state, action) => {
  let { language } = action;
  return state.merge({ fetching: true,language:language })
}

//START getDataToday
export const getDataTodayRequest = (state)=>{
  return state.merge({ fetching: true})
}

export const getDataTodaySuccess = (state,action)=>{
  return state.merge({ fetching: false,dataToday:action.data})
}

export const getDataTodayFailure = (state)=>{
  return  state.merge({ fetching: true})
}

//END getDataDeviceToday


//START getDataDetailsToday
export const getDataItemsTodayRequest = (state)=>{
  return state.merge({ fetching: true})
}
export const getDataItemsTodaySuccess = (state,action)=>{
  return state.merge({ fetching: false,dataItemsToday:action.data})
}
export const getDataItemsTodayFailure = (state)=>{
  return  state.merge({ fetching: true})
}
//END getDataDetailsToday

//START getDataByMonth
export const getDataByMonthRequest = (state)=>{
  return state.merge({ fetching: true})
}
export const getDataByMonthSuccess = (state,action)=>{
  return state.merge({ fetching: false,dataMonth:action.data})
}

export const getDataByMonthFailure = (state)=>{
  return state.merge({ fetching: false})
}
//END getDataDeviceToday

//START getDataByDayToDay
export const getDataByDayToDayRequest = (state)=>{
 return state.merge({ fetching: true})
}
export const getDataByDayToDaySuccess = (state,action)=>{
 return state.merge({ fetching: false,dataWeek:action.data})
}
export const getDataByDayToDayFailure = (state)=>{
 return state.merge({ fetching: true})
}
//END getDataByDayToDay

export const setMoodRequest = (state) => {
  return state.merge({ fetching: true})
}
*/

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_DEVICE]: setDevice,
  [Types.SET_SETTING_COMPLETED]: setSettingCompleted,
  [Types.SET_LAST_SYNCED]: setLastSynced,
  [Types.SET_GOAL]: setGoal,
  [Types.SET_USER]: setUser,
  [Types.SET_LANGUAGE]: setLanguage,

  [Types.GET_DATA_TODAY_REQUEST]:getDataTodayRequest,
  [Types.GET_DATA_TODAY_SUCCESS]:getDataTodaySuccess,
  [Types.GET_DATA_TODAY_FAILURE]:getDataTodayFailure,

  [Types.GET_DATA_ITEMS_TODAY_REQUEST]:getDataItemsTodayRequest,
  [Types.GET_DATA_ITEMS_TODAY_SUCCESS]:getDataItemsTodaySuccess,
  [Types.GET_DATA_ITEMS_TODAY_FAILURE]:getDataItemsTodayFailure,

  [Types.GET_DATA_BY_MONTH_REQUEST]:getDataByMonthRequest,
  [Types.GET_DATA_BY_MONTH_SUCCESS]:getDataByMonthSuccess,
  [Types.GET_DATA_BY_MONTH_FAILURE]:getDataByMonthFailure,

  [Types.GET_DATA_BY_DAY_TO_DAY_REQUEST]:getDataByDayToDayRequest,
  [Types.GET_DATA_BY_DAY_TO_DAY_SUCCESS]:getDataByDayToDaySuccess,
  [Types.GET_DATA_BY_DAY_TO_DAY_FAILURE]:getDataByDayToDayFailure,

  [Types.SET_MOOD_REQUEST]: setMoodRequest,


})
