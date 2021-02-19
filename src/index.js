import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer';
import  rootSaga from './sagas/index'
import createSagaMiddleware from 'redux-saga';


const saga=createSagaMiddleware()

const logger = action =>{
 return next => {
    return action => {
      console.log('Action' ,action)
      next(action)
    }
  }
}
const store = createStore(reducer,applyMiddleware(saga,logger))
saga.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
