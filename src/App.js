import React, { Component, useState } from "react";
import "./App.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main/Main";
import TodoContext from "./context/TodoContext";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <Main />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdPYwZAFD_-fh-3ycqUEuZs1zBZqT2WumeA&usqp=CAU"
        alt="background"
      />
    </TodoContext.Provider>
  );
}

export default App;
