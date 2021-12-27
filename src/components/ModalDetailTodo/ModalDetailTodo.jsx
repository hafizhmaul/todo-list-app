import { Dialog, Popover, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Modal } from '..';
import { deleteTodoFunction, toggleStatusTodoFunction } from '../../utils/todoFunction';
import { getDateToday } from '../../utils/getDateToday';

const ModalDetailTodo = ({ isOpenModalDetail, toggleModalDetailInfo, actionTodo, headerTodo, data }) => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  }
  
  const handleToggleStatusTodo = (status) => {
    const changeStatus = status === 0 ? 1 : 0;
    const changeDate = status === 0 ? getDateToday : data.createdAt;
    toggleStatusTodoFunction(data, changeStatus, changeDate, dispatch);
    toggleModalDetailInfo();
  }

  const handleDeleteTodo = () => {
    if (headerTodo === "Remaining") {
      deleteTodoFunction(data.id, dispatch);
      toggleModalDetailInfo();
    } else {
      alert("Completed Todo cannot be deleted");
    }
  }


  return (
    <>
      <Modal isOpenModal={isOpenModal} toggleModal={toggleModal} toggleModalDetailInfo={toggleModalDetailInfo} headerTodo="Update" actionTodo="UPDATE_TODO" data={data} />
      <Transition appear show={isOpenModalDetail} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={toggleModalDetailInfo}
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
              <div className={`inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl border-2 ${headerTodo === "Remaining" ? 'bg-yellow-200 border-yellow-400' : 'bg-purple-200 border-purple-400'}`}>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <div>
                    {headerTodo}
                  </div>
                  <div>
                    <Popover className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:text-gray-700 group-hover:flex focus-visible:outline-none">
                      <Popover.Button>
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </Popover.Button>
                      <Popover.Panel className="absolute z-10 bg-white shadow w-24 top-full right-2/4 rounded-lg">
                        <div className="block text-black text-center text-sm font-semibold p-1">
                          <div onClick={() => toggleModal()} className="mb-4 text-gray-500 cursor-pointer">Update</div>
                          <div onClick={handleDeleteTodo} className="text-red-500 cursor-pointer">Delete</div>
                        </div>
                      </Popover.Panel>
                    </Popover>
                  </div>
                </Dialog.Title>
                <form>
                  <div className="form-control py-4">
                    <label className="font-semibold">Title</label>
                    <input type="text" disabled placeholder="Title" className="input my-2 input-warning" defaultValue={data.title} />
                    <label className="font-semibold">Description</label>
                    <textarea disabled className="textarea h-24 my-2 textarea-bordered textarea-warning" defaultValue={data.description} />
                  </div>
                  <div class="p-6 card bordered">
                    <button type="button" onClick={() => handleToggleStatusTodo(data.status)} className={`btn ${data.status ? 'btn-primary' : 'btn-warning'}`}>
                      {data.status ? "UNDONE" : "DONE"} 
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

export default ModalDetailTodo
