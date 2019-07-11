import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'
import TodoList from './components/TodoList'

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
     <TodoList />
    </div>
  );
}

export default App;


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 