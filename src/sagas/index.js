import { put, takeLatest, all,takeEvery } from 'redux-saga/effects';
import getInitialState from '../initialState'


function* fetchInitialState() {
    console.log('fetchInitialState')
    const json = yield  getInitialState();
    console.log('InitialState', json)          
    yield put({ type: "SET_INITIAL_STATE", json: json, });
  }

  function* actionWatcher() {
    yield takeEvery('GET_INITIAL_STATE', fetchInitialState)
}
export default function* rootSaga() {
  yield all([
  actionWatcher(),
  ]);
}