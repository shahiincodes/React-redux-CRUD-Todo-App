
import React from 'react'
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Todo from './components/Todo';

const App = () => {
  return (
    <Provider store={store}>
      <div  className="App" >
        <Todo/>
      </div>
    </Provider>
  )
}

export default App
