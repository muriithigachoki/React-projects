// import { ACTIONS } from "../actions/actions";
//const reducer = (state, action)
const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_ACTION: "toggle_action",
  DELETE_TODO: "delete_todo",
  UPDATE_TODO: "update_todo",
};
export const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, action.todo];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.id);
    case ACTIONS.UPDATE_TODO:
      return todos.map((todo) => (todo.id === action.id ? newTodo : todo));
  }
};
