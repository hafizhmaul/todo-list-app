export const GET_TODO = "GET_TODO";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

export const GetTodo = (data) => ({
  type: GET_TODO,
  payload: data
})

export const AddTodo = (title, description) => ({
  type: ADD_TODO,
  payload: {
    title: title,
    description: description,
  }
})

export const UpdateTodo = (data) => ({
  type: UPDATE_TODO,
  payload: data
})

export const DeleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id: id,
  }
})

export const ToggleStatusTodo = (data) => ({
  type: TOGGLE_STATUS_TODO,
  payload: data
})