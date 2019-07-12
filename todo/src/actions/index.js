

export const updateTodo = todo => {
    return {
        type : "UPDATE_TODO",
        payload : todo
    }
}

export const toggleTodo = index => {
    return {
        type: "TOGGLE_TODO",
        payload: index
    }
}

export const deleteTodo = () => {
    return {
        type: "DELETE_TODO"
    }
}