import React, { useState } from "react";
import { ACTIONS } from "../actions/actions";
const UpdateTodo = ({ dispatch, todo }) => {
  const [newName, setNewName] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({
            type: ACTIONS.UPDATE_TODO,
            todo: { id: todo.id, name: newName },
          });
        }}
      >
        <input
          type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default UpdateTodo;
