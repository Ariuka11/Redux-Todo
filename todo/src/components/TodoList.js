import React from 'react';
import { connect } from 'react-redux'
import { updateTodo } from '../actions'


class TodoList extends React.Component {
    state = {
        newTodos : ""
    }
   
    handleChanges = e => {
        this.setState ({newTodos : e.target.value})
    }

    updateTodo = e => {
        e.preventDefault();
        this.props.updateTodo(this.state.newTodos);
        this.setState({newTodos : ''});
    }

    render () {
        console.log('Props', this.props)
        return (
            <div>
                <h1>TodoList</h1>
                <ul>
                    {this.props.todo.map(item => (
                    <li >{item.value}</li>
                    ))}
                </ul>
                <form>
                <input 
                  type = "text"
                  value = {this.state.newTodos}
                  onChange = {this.handleChanges}
                  placeholder = 'add to do ...'
                />
                <button type = 'submit' onClick = {this.updateTodo}>Add Todos</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('STATE', state)
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps, {updateTodo})(TodoList); 