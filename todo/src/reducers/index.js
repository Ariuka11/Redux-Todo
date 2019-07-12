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
        case "TOGGLE_TODO" :
            return {
                ...state,
              todo: state.todo.map((todos, index)=>{
                  if(action.payload === index) {
                      return {
                          ...todos,
                          completed: !todos.completed
                      }
                }else {
                      return todos;
                  }
              })  
            }
        case "DELETE_TODO":
            return {
                ...state,
               todo: state.todo.filter(todos => {
                   return todos.completed !== true
               }) 
            }    
        default:
         return state;
    }
}