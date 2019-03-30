import { call, put } from 'redux-saga/effects'
import DeviceActions from '../Redux/DeviceRedux';
import SleepMgr from '../SleepMgr'
import SportMgr from '../SportMgr'
import HeartRateMgr from '../HeartRateMgr'
import MoodMgr from '../MoodMgr'
import DateUtils from '../../utils/DateUtils'

const DATA_DATE = DateUtils.getCurrentDateRanges()


export function* getDataToday(action) {

  var { deviceId, day, month, year } = action.params

  let dataSleep = yield call(SleepMgr.getDataByDay, deviceId, day, month, year);
  let dataSport = yield call(SportMgr.getDataByDay, deviceId, day, month, year);
  let dataHeartRate = yield call(HeartRateMgr.getDataByDay, deviceId, day, month, year);
  let dataMood = yield call(MoodMgr.getDataByDay, deviceId, day, month, year);

  var data = {
    dataSleep: dataSleep ,
    dataSport: dataSport,
    dataHeartRate: dataHeartRate,
    dataMood: dataMood,
  }

  yield put(DeviceActions.getDataTodaySuccess(data));

}

export function* getDataItemsToday(action) {

    var { deviceId, day, month, year } = action.params

    let dataItemsSleep = yield call(SleepMgr.getItemsByDay, deviceId, day, month, year);
    let dataItemsSport = yield call(SportMgr.getItemsByDay, deviceId, day, month, year);
    let dataItemsHeartRate = yield call(HeartRateMgr.getItemsByDay, deviceId, day, month, year);
    let dataHeartRateStats = yield call(HeartRateMgr.getStatsByDay, deviceId, day, month, year);

    var data = {
      dataItemsSleep: dataItemsSleep ,
      dataItemsSport: dataItemsSport ,
      dataItemsHeartRate: dataItemsHeartRate,
      dataHeartRateStats: dataHeartRateStats
    }

    yield put(DeviceActions.getDataItemsTodaySuccess(data));

}

export function* getDataByMonth(action) {

  let { params } = action

  let dataSleep = yield call(SleepMgr.getDataByDayToDay, params);
  let dataSport = yield call(SportMgr.getDataByDayToDay, params);
  let dataHeartRate = yield call(HeartRateMgr.getDataByDayToDay, params);
  let dataMood = yield call(MoodMgr.getDataByDayToDay, params);

  var data = {
    dataMood: dataMood,
    dataSleep: dataSleep,
    dataSport: dataSport,
    dataHeartRate: dataHeartRate,
  }
  yield put(DeviceActions.getDataByMonthSuccess(data));

}

export function* getDataByDayToDay(action) {

  let { params } = action

  let dataMood = yield call(MoodMgr.getDataByDayToDay, params);
  let dataSleep = yield call(SleepMgr.getDataByDayToDay, params);
  let dataSport = yield call(SportMgr.getDataByDayToDay, params);
  let dataHeartRate = yield call(HeartRateMgr.getDataByDayToDay, params);

  var data = {
    dataMood: dataMood,
    dataSleep: dataSleep,
    dataSport: dataSport,
    dataHeartRate: dataHeartRate,
  }
  yield put(DeviceActions.getDataByDayToDaySuccess(data));

}

export function* setMood(action) {

  var { mood } = action
  if (mood != null) {
    yield call(MoodMgr.addMood, mood.mDeviceId, mood.value);
    yield put(DeviceActions.getDataTodayRequest({
      deviceId: mood.mDeviceId,//this.state.selectedDevice.mDeviceId,
      day: DATA_DATE.date,
      month: DATA_DATE.month,
      year: DATA_DATE.year
    }));
  }
}
