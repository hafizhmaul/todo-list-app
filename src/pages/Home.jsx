/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { InputTodo, CompletedTodo, RemainingTodo, LoadingIndicator } from '../components'
import { getDataTodo } from '../redux/service';
import { completedTodo, remainingTodo } from '../utils/filteringTodo';

const Home = () => {
  const stateTodo = useSelector(state => state)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    dispatch(getDataTodo());
  }, [])

  return (
    <div>
      {loading ?
        <div className="flex justify-center pt-24">
          <LoadingIndicator />
        </div>
        :
        <div className="bg-todo h-auto">
          <div className="flex justify-center gap-4 px-4">
            <RemainingTodo data={remainingTodo(stateTodo)} />
            <CompletedTodo data={completedTodo(stateTodo)} />
            <InputTodo data={stateTodo?.data} isOpen={isOpen} toggleModal={toggleModal} />
            <div className="fixed top-80-percent -translate-y-2/4">
              <button onClick={() => toggleModal()} data-tip="Add new Todo" class="btn btn-accent btn-lg tooltip flex justify-center items-center shadow">
                Add Todo
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Home
