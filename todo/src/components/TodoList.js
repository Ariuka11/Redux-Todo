import React from 'react';
import { connect } from 'react-redux'
import { updateTodo, toggleTodo, deleteTodo } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />


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
    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
    }

    deleteTodo = (e) => {
        e.preventDefault();
        this.props.deleteTodo();
    }

    render () {
        console.log('Props', this.props)
        return (
            <div>
                <h1>TodoList</h1>
                <div>
                    {this.props.todo.map((item, index) => (
                    <h4 onClick = {e=> this.toggleTodo(e, index)} key = {index}>
                      {item.value}
                      {item.completed && element}
                    </h4>
                    ))}
                </div>
                <form>
                    <input 
                    type = "text"
                    value = {this.state.newTodos}
                    onChange = {this.handleChanges}
                    placeholder = 'add to do ...'
                    />
                    <button type = 'submit' onClick = {this.updateTodo}>Add Todos</button>
                </form>
                <button type = "submit" onClick = {this.deleteTodo}>Delete</button>
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

export default connect(mapStateToProps, {updateTodo, toggleTodo, deleteTodo})(TodoList); 