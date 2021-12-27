
export const remainingTodo = (stateTodo) => {
  return stateTodo.data.filter((item) => item.status === 0).sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
}

export const completedTodo = (stateTodo) => {
  return stateTodo.data.filter((item) => item.status === 1).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
}