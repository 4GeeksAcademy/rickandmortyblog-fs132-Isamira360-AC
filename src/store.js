export const initialStore=()=>{
  return{
    message: null,
    characters: [],
    locations:[],
    episodes:[],
    todos:[
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'showEpisodes':
      return{
        ...store,
        episodes:action.payload
      }

    case 'showLocations':
    return{
      ...store,
      locations:action.payload
    }

    case 'showCharacters':
    return{
      ...store,
      characters: action.payload
    }

    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
