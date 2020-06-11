import React, { useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { MdDone } from "react-icons/md";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ tod: "", done: false });

  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo({ ...todo, tod: "" });
  };

  const surpress = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  const done = (i) => {
    const newTodos = [...todos];
    newTodos[i].done = true;
    setTodos(newTodos);
  };

  const completeTodos = () => {
    const newTodos = [...todos];
    let test = newTodos.filter((t) => t.done == true);
    setTodos(test);
  };

  const moveCompleted = () => {
    const newTodos = [...todos];
    let test = newTodos.filter((t) => t.done == true);
    let noTest = newTodos.filter((t) => t.done == false);
    let res = noTest.concat(test);
    setTodos(res);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          minWidth: "50vh",
          minHeight: "80vh",
          backgroundColor: "#FF6666",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <h2>Today's Tasks</h2>
        <h3>Get things done, one item at a time.</h3>
        <hr style={{ width: "80%" }} />
        <ul style={{ width: "100%" }}>
          {todos.map((t, i) => {
            return (
              <li
                key={i}
                style={{
                  display: "flex",
                  width: "75%",
                  height: "40px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: 20,
                  margin: 20,
                  textDecoration: t.done ? "line-through" : "",
                }}
              >
                {t.tod}
                <div
                  style={{ height: 20, width: 20, backgroundColor: "green" }}
                  onClick={() => surpress(i)}
                >
                  <GoTrashcan />
                </div>
                <div
                  style={{ height: 20, width: 20, backgroundColor: "green" }}
                  onClick={() => done(i)}
                >
                  <MdDone />
                </div>
              </li>
            );
          })}
        </ul>
        <div style={{ position: "absolute", bottom: 40 }}>
          <h2> Add to the todo list</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="tod"
                value={todo.tod}
                onChange={onChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <button onClick={completeTodos}>Completed</button>
          <button onClick={moveCompleted}>Move Completed to the end</button>
        </div>
      </div>
    </div>
  );
}

export default App;
