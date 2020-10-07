import React, { Component } from 'react';
import TodoList from './Todo/TodoList';

const todos = [
  {id: 1, completed: false, title: 'Выпить стакан воды'},
  {id: 2, completed: false, title: 'Сделать разминку'},
  {id: 3, completed: false, title: 'Приготовить завтрак'}
]

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>React tutorial</h1>

        <TodoList todos={todos}/>
      </div>
    );
  }
}

export default App;
