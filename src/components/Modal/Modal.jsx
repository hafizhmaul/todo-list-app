import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { addTodoFunction, updateTodoFunction } from '../../utils/todoFunction';
import { useDispatch } from "react-redux";
import { getDateToday } from '../../utils/getDateToday';

const Modal = ({ isOpenModal, toggleModal, actionTodo, headerTodo, data }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actionTodo === "ADD_TODO") {
      addTodoFunction(title, description, setTitle, setDescription, dispatch)
    } else if (actionTodo === "UPDATE_TODO") {
      updateTodoFunction(data, (title !== "" ? title : data.title), (description !== "" ? description : data.description), (getDateToday), dispatch)
    }

    toggleModal();
  }

  return (
    <>
      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={toggleModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={`inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-2 ${actionTodo === "ADD_TODO" ? 'border-green-400' : 'border-pink-400'}`}>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {headerTodo}
                </Dialog.Title>
                <form>
                  <div className="form-control py-4">
                    <input type="text" required onChange={e => setTitle(e.target.value)} placeholder="Title" className={`input my-4 ${actionTodo === "ADD_TODO" ? 'input-accent' : 'input-secondary'}`} defaultValue={actionTodo === "UPDATE_TODO" ? data.title : title} />
                    <textarea onChange={e => setDescription(e.target.value)} className={`textarea h-24 textarea-bordered ${actionTodo === "ADD_TODO" ? 'textarea-accent' : 'textarea-secondary'}`} placeholder="Description" defaultValue={actionTodo === "UPDATE_TODO" ? data.description : description} />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="inline-flex justify-center px-8 py-2 text-sm font-medium text--900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      {actionTodo === "ADD_TODO" ? "Save" : "Update Todo"}
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal;