import axios from 'axios';
import { GET_TODO } from './action';

const baseAPI = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'

export const getDataTodo = () => (dispatch) => {
  return(
    axios.get(baseAPI).then((result) => {
      dispatch({
        type: GET_TODO,
        payload: {
          data: result.data
        }
      })
    }).catch((err) => {
      console.log(err)
    })
  )
}