import TodoWrapper from "./TodoWrapper";
import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/TodoContext";
import {
  faCheck,
  faCircleCheck,
  faCircleNotch,
  faXmark,
  faTrash,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Form from "../addTodo/Form";

const Todo = () => {
  const { todo, setTodo } = useContext(TodoContext);
  const [filter, setFilter] = useState([...todo]);
  const Completed = (item, index) => {
    const temp = [...todo];
    temp[index].completed = !temp[index].completed;
    setTodo(temp);
  };

  const RemoveTodo = (item, index) => {
    const temp = [...todo];
    const a = temp.filter((el) => el.id != item.id);
    console.log(a);
    setFilter(a);
    setTodo(a);
  };

  const FiltComp = () => {
    const temp = [...todo];
    const a = temp.filter((el) => el.completed != false);
    console.log(a);
    setFilter(a);
  };

  const Active = () => {
    const temp = [...todo];
    const a = temp.filter((el) => el.completed != true);
    console.log(a);
    setFilter(a);
  };

  const FiltUncomp = () => {
    const temp = [...todo];
    const a = t.filter((el) => el.completed != true);
    console.log(a);
    setFilter(a);
    setTodo(a);
  };

  const All = () => {
    const temp = [...todo];

    console.log(todo);
    setFilter(temp);
  };

  return (
    <TodoWrapper className="pt-5 row">
      <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <div className="todo">
          <h1 className="text-left">TO DO</h1>
          <Form />
          <ul className="rounded shadow">

            {filter.map((item, index) => (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center  border text-dark px-3 py-3"
              >
                <div className="tasks d-flex gap-2">
                  <div className="completed ">
                    {item.completed == true ? (
                      <span onClick={() => Completed(item, index)}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                    ) : (
                      <span onClick={() => Completed(item, index)}>
                        <FontAwesomeIcon icon={faSpinner} />
                      </span>
                    )}
                  </div>
                  <p className={item.completed && "throw"}>{item.title}</p>
                </div>
                <div className="btns">
                  <div className="delete">
                    <button
                      className="btn"
                      onClick={() => RemoveTodo(item, index)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
            <li className="d-flex justify-content-between align-items-center  border text-dark px-3 py-3">
              <p>{todo.length} items left </p>
              <div>
                <button className="btn" onClick={() => All()}>
                  All
                </button>
                <button className="btn" onClick={() => Active()}>
                  Active
                </button>
                <button className="btn" onClick={() => FiltComp()}>
                  Completed
                </button>
              </div>
              <button className="btn" onClick={() => FiltUncomp()}>
                Clear Completed
              </button>
            </li>
          </ul>
        </div>
      </div>
    </TodoWrapper>
  );
};

export default Todo;