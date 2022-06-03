export const TODO_STATUS_CHANGE = "todo status change";
export const TODO_ADD = "todo add";
export const TODO_DELETED = "todo deleted";

export const addTodo = (todoText: string) => ({
  type: TODO_ADD,
  payload: todoText,
});
export const todoStatusChange = (todoId: number, newStatus: boolean) => ({
  type: TODO_STATUS_CHANGE,
  payload: { id: todoId, done: newStatus },
});
