import { useState } from "react";
import ToDocomponent from "./components/0.useReducer/ToDo/ToDo.component";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDocomponent />{" "}
    </>
  );
}

export default App;
