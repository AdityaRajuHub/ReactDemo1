import React from 'react';

class AddTodo extends React.Component {

    state= {
        title: '',
        obj: {}
    }

    onChange= (e) => {this.setState({
        title: e.target.value, 
        obj: {title: e.target.value, completed: false}
    })}

    addItem= () => {
        this.props.addTodoItem(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div className="container mt-3 mb-3">
                <div className="form-inline">
                    <div className="form-group col-8 p-0">
                        <input id="todoItem" type="text" className="form-control col-12" 
                            onChange={this.onChange} value={this.state.title} placeholder="Enter Todo..." />
                    </div>
                    <div className="form-group col-4 p-0">
                        <button className="btn btn-info float-right col-12" onClick={this.addItem}>Add Item</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTodo;