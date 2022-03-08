import { all } from "redux-saga/effects";
import { jobsWatcher } from "./jobsSaga";
import { workersWatcher } from "./workersSaga";

export function* rootWatcher(){
    yield all([jobsWatcher(), workersWatcher()])
}