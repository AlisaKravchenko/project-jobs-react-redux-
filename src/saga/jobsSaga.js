import { push } from "connected-react-router"
import {put, takeEvery, call} from "redux-saga/effects"
import { setJobs } from "../redux/jobsSlice"

function* jobsWorker(){
    const data = yield call(() => fetch('https://5f7998dbe402340016f9321f.mockapi.io/jobs'))
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setJobs(json))
};

export function* jobsWatcher(){
    yield takeEvery('jobs/asyncSetJobs', jobsWorker)
}