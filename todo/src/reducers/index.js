const initialState = {
    todo : [
        {value: 'Walk the dog.', completed: false},
        {value: 'Play Tennis', completed: false }
  ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_TODO" :
            const newtodo = { value : action.payload, completed: false}
            return { 
                ...state,
              todo : [...state.todo, newtodo]
            }

        default:
         return state;
    }
}