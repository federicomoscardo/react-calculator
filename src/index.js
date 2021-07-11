import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  operationHistory: "",
  display: 0,
  result: 0,
  operator:"",
  addingNumber: false
}

//este es el STORE de toda mi app - lo guardo en una constante
const store = createStore(function(state = initialState, action) {
  switch (action.type) {
    case "ERASE_DISPLAY":
      if (action.payload) {
        return {...state, display: 0, addingNumber: false}
      } else {
        return {...state, display: ""}
      }

    case "RECEIVE_OPERATOR":
      return {...state, searching : true}

    case "RECEIVE_NUMBER":
      return {...state, display: state.display + action.payload, addingNumber: true}

    case "FIRST_VALUE":
      return {...state, result: Number(state.display), operator: action.payload, addingNumber: false}

    case "SHOW_RESULT":
      return {...state, display: state.result}

    case "SHOW_OPERATION":
      return {...state, operationHistory: state.operationHistory + state.display + action.payload}

    case "DO_OPERATION":
      switch (state.operator) {
        case '+':
          return {...state, result: state.result + Number(state.display), operator: action.payload, addingNumber: false}
        case '-':
          return {...state, result: state.result - Number(state.display), operator: action.payload, addingNumber: false}
        case '*':
          return {...state, result: state.result * Number(state.display), operator: action.payload, addingNumber: false}
        case '/':
          return {...state, result: state.result / Number(state.display), operator: action.payload, addingNumber: false}
        case '=':
          return {...state, result: state.result, operator: action.payload, addingNumber: false}
      }
      
      case "ERASE_ALL":
        return {...state, display: 0, operationHistory: "", result: 0, operator: "", addingNumber: false}
  }
  
  return state
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
