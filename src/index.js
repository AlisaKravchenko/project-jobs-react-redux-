import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import jobsSlice from './redux/jobsSlice';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootWatcher } from './saga/sagas';
import workersSlice from './redux/workersSlice';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    jobs: jobsSlice,
    workers: workersSlice
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootWatcher)

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    
  document.getElementById('root')
);

