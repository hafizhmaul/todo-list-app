import React, { useState } from 'react';
import { ModalDetailTodo } from '..';

const CompletedTodo = ({ data }) => {
  const [isOpenModalDetail, setIsOpenModalDetail] = useState(false);
  const [detailTodo, setDetailTodo] = useState([]);

  const toggleModalDetailInfo = () => {
    setIsOpenModalDetail(!isOpenModalDetail)
  }

  const selectTodo = (item) => {
    setDetailTodo(item)
  }

  return (
    <div>
      <ModalDetailTodo isOpenModalDetail={isOpenModalDetail} toggleModalDetailInfo={toggleModalDetailInfo} data={detailTodo} headerTodo="Completed" />
      <div className="py-2 font-semibold text-xl text-purple-700">
        <span className="px-2 py-1 bg-white rounded-full">Completed</span>
      </div>
      {data.length ?
        <>
          {data?.map((item, idx) => {
            return (
              <div
                className="relative w-72 mb-3 flex flex-col items-start p-4 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 overflow-hidden whitespace-nowrap overflow-ellipsis"
                key={idx}
                onClick={() => {
                  toggleModalDetailInfo();
                  selectTodo(item);
                }}>
                <span className="flex items-center h-6 px-3 text-xs font-semibold text-purple-500 bg-purple-100 rounded-full w-64 overflow-hidden whitespace-nowrap overflow-ellipsis">{item.title}</span>
                <h4 className="mt-3 text-sm font-medium">{item.description}</h4>
                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <span className="ml-1 leading-none">{item.createdAt}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </> :
        <div className="relative w-72 h-24 flex justify-center items-center bg-white border-2 border-purple-600 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
          <h4 className="text-lg font-medium text-purple-800">Todo is Empty</h4>
        </div>
      }
    </div>
  )
}

export default CompletedTodo
