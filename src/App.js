import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {
          id: 1,
          title: 'Prepare Angular',
          completed: false
        },
        {
          id: 2,
          title: 'Prepare Spring MVC',
          completed: false
        }
      ]

    };
  }

  addTodoItem= (title)=> {
    console.log(title);
    let obj= {};
    obj.id= this.state.todoItems.length+1;
    obj.title= title;
    obj.completed= false;
    this.state.todoItems.push(obj);
    this.setState({todoItems: this.state.todoItems});
  }

  deleteTodo= (id) => {
    this.setState({todoItems: this.state.todoItems.filter((todo) => {
      return todo.id!==id;
    })})
  }

  markCompleted= (id)=> {
    this.setState({todoItems: this.state.todoItems.map((todo) => {
      if(todo.id===id){
        todo.completed= !todo.completed;
      }
      return todo;
    }) });
  }

  render() {
    return (
      <div className="App">
        <AddTodo addTodoItem={this.addTodoItem} />
        <Todos todoItems={this.state.todoItems} markCompleted={this.markCompleted} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
