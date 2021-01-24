import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(manageTodo);

export function render(){
  ReactDOM.render(
    <Provider>
      <App store={store} />
    </Provider>,
    document.getElementById('root')   
  );
}
