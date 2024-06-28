import { useCallback, useReducer, useState } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { ACTIONS } from "../actions/actions";
import Todoitemcomponent from "./Todoitem.component";
function ToDocomponent() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  return (
    <>
      <h3>This is a todo List</h3>

      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({
            type: ACTIONS.ADD_TODO,
            todo: {
              id: Date.now(),
              name: name,
            },
          });
          console.log(name);
        }}
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Todo"
        />

        <button type="submit">Create Todo</button>
      </form>

      <Todoitemcomponent todos={todos} dispatch={dispatch} />
    </>
  );
}

export default ToDocomponent;
