import { getDateToday } from "../utils/getDateToday";
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO, TOGGLE_STATUS_TODO } from "./action";

const initialState = {
  data: [{
    id: null,
    title: "",
    description: "",
    status: 0,
    createdAt: null,
  }]
}


function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODO: {
      return {
        ...state,
        data: action.payload.data
      }
    }

    case ADD_TODO:
      return {
        data: [
          ...state.data,
          {
            id: Math.floor(Math.random() * 1000),
            title: action.payload.title,
            description: action.payload.description,
            status: 0,
            createdAt: getDateToday
          }
        ]
      };

    case UPDATE_TODO: {
      return {
        ...state,
        data: state.data.map(todo =>
          todo.id === action.id ? action.data : todo
        )
      }
    }

    case DELETE_TODO: {
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.id)
      }
    }

    case TOGGLE_STATUS_TODO: {
      return{
        ...state,
        data: state.data.map(todo =>
          todo.id === action.id ? action.data : todo
        )
      }
    }

    default:
      return state;
  }
}

export default reducer;