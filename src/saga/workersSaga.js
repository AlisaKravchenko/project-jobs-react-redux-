import { push } from "connected-react-router"
import {call, put, takeEvery} from "redux-saga/effects"
import { setWorkers } from "../redux/workersSlice"

function* workersWorker(){
    const data = yield call(() => fetch('https://5f7998dbe402340016f9321f.mockapi.io/providers'))
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setWorkers(json))
}
export function* workersWatcher(){
    yield takeEvery('workers/asyncSetWorkers', workersWorker)
}