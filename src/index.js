import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let postsData = [
  { id: 1, message: 'Hello', likesCount: 12 },
  { id: 2, message: 'how are you', likesCount: 32 },
  { id: 3, message: 'what your name', likesCount: 1 },
  { id: 4, message: 'mu name is blabla', likesCount: 2 },
  { id: 5, message: 'bye', likesCount: 2 },
]
let dialogsData = [
  { id: 1, name: 'Сонечка' },
  { id: 2, name: 'Ванечка' },
  { id: 3, name: 'Санечка' },
  { id: 4, name: 'Максимочка' },
  { id: 5, name: 'Денисочка' },
]

let messageData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'how are you' },
  { id: 3, message: 'what your name' },
  { id: 4, message: 'mu name is blabla' },
  { id: 5, message: 'bye' },
]
ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messageData={messageData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();