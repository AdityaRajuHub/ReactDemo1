import React from 'react';

class TodoItem extends React.Component {

    render() {
        const {id, title, completed} = this.props.item;
        return (
            <div className="container">
            <div className="card">
                <div className="card-header">
                    <button className="btn btn-danger float-right" onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
                    <input type="checkbox" className="float-left" onChange={this.props.markCompleted.bind(this, id)}/>
                    <span className="float-left" style={this.getTextStyle()}>{ title }</span>
                </div>
            </div>
            <br/>
            </div>
        );
    }

    getTextStyle= ()=> {
        return {
            padding: '5px',
            margin:'10px',
            textDecoration: this.props.item.completed ? 'line-through' : 'none'};
    }
}

export default TodoItem;