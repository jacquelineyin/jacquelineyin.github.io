import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';

const history = createMemoryHistory()

ReactDOM.render(
    // <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>,
    // </Provider>,
    document.getElementById("root")
  );