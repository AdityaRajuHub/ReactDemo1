import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {

    
    render() {

        let element= this.props.todoItems.map((todo) => (
            <TodoItem key={todo.id} item={todo} markCompleted={this.props.markCompleted} deleteTodo={this.props.deleteTodo} />
        ));
        
        return element;
    }
}

export default Todos;