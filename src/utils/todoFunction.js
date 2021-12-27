import { AddTodo, DeleteTodo, TOGGLE_STATUS_TODO, UPDATE_TODO } from "../redux/action";

export const addTodoFunction = (title, description, setTitle, setDescription, dispatch) => {
  if (title !== "") {
    dispatch(AddTodo(title, description));
    setTitle("");
    setDescription("");
  } else {
    console.log("Todo cannot be empty");
  }
}

export const updateTodoFunction = (data, title, description, createdAt, dispatch) => {
  dispatch({
    type: UPDATE_TODO,
    id: data.id,
    data: {
      id: data.id,
      title: title,
      description: description,
      status: data.status,
      createdAt: createdAt
    }
  });
}

export const deleteTodoFunction = (id, dispatch) => {
  dispatch(DeleteTodo(id))
}

export const toggleStatusTodoFunction = (data, status, createdAt, dispatch) => {
  dispatch({
    type: TOGGLE_STATUS_TODO,
    id: data.id,
    data: {
      id: data.id,
      title: data.title,
      description: data.description,
      status: status,
      createdAt: createdAt
    }
  });
}