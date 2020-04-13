import React, { useState, useReducer } from "react";
import reducer from "../reducer/reducer";
import initialState from "../reducer/initialState";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state, dispatch);
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = (e) => {
    e.preventDefault();
    setNewTitleText(e.target.value);
  };

  function addTodo(text) {
    return {
      type: "ADD_TODO",
      text: text,
      completed: false,
      id: new Date(),
    };
  }

//   const removeTodo = () => {
//     const newList = state.filter((i) => i.completed === false);
//     //console.log(newList);
//     return newList;
//   };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        {state.map((todo) => (
          <h3
            onClick={() => {
              dispatch({ type: "TOGGLE_TOGO", id: todo.id });
            }}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.item}
          </h3>
        ))}
      </div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="add something"
          value={newTitleText}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch(addTodo(newTitleText), setNewTitleText(""));
          }}
        >
          Add Todo
        </button>
        <button onClick={()=>dispatch({ type: "CLEAR_TOGO"})}>
          Clear Completed
        </button>
      </form>
    </div>
  );
};
export default TodoList;
