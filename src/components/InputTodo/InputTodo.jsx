import { Modal } from "..";

const InputTodo = ({ isOpen, toggleModal }) => {
  return (
    <>
      <Modal isOpenModal={isOpen} toggleModal={toggleModal} headerTodo="Add" actionTodo="ADD_TODO"/>
    </>
  )
}

export default InputTodo;