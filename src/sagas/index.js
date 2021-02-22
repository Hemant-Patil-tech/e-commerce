import { put, takeLatest,call, all,takeEvery } from 'redux-saga/effects';

import axios from 'axios'


function* fetchInitialState() {
  const userData = yield call(getData);
  console.log('',userData)
  yield put({ type: "SET_INITIAL_STATE", json:userData.data }); 
  }

  function* actionWatcher() {
    yield takeEvery('GET_INITIAL_STATE', fetchInitialState)
}


function getData() {
  return axios.get('initialState.json');
};


export default function* rootSaga() {
  yield all([
  actionWatcher(),
  ]);
}