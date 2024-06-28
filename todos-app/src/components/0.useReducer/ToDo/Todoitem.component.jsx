import React, { useState } from "react";
import { ACTIONS } from "../actions/actions";
import UpdateTodo from "./UpdateTodo";

function Todoitemcomponent({ todos, dispatch }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleId, setIsVisibleId] = useState();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button onClick={handleClick}>{isVisible && "edit"}</button>
              {isVisible && (
                <div style={{ marginTop: "10px" }}>
                  <UpdateTodo dispatch={dispatch} todo={todo} />
                </div>
              )}
              <button
                className="btn-outline-danger"
                onClick={() =>
                  dispatch({ type: ACTIONS.DELETE_TODO, id: todo.id })
                }
              >
                delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Todoitemcomponent;
