import { handleChanges } from "../actions";

const initialState = {
    todo : [{
        value: 'Walk the dog.',
        completed: false
    }]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_TODO" :
            const newtodo = { value : action.payload}
            return { 
              todo : [...state.todo, newtodo]
            }

        default:
         return state;
    }
}