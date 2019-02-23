import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Exam from './Components/Exam/Exam';
import registerServiceWorker from './registerServiceWorker';
//import PostComponent from './Components/PostComponent';
import { NewPost } from './containers/NewPost';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log(store, "Store log");
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
, document.getElementById('root'));

registerServiceWorker();
