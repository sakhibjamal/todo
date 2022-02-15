import React, { useContext, useState } from "react";
import FormWrapper from "./FormWrapper";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TodoContext from "../../context/TodoContext";
const Form = () => {
  const { todo, setTodo } = useContext(TodoContext);
  const params = useParams();

  const { register, reset, handleSubmit } = useForm({});

  const [clear, setClear] = useState(null);

  const submit = (data) => {
    if (data === "") return;
    else {
      const t = [...todo];
      const id = todo.length + 1;
      data.id = id;
      data.completed = false;
      console.log(data);
      t.push(data);
      setTodo(t);

    }
    setClear('');
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(submit)}>
        <input
          className="form-control px-3 py-4 mb-5"
          placeholder="Add to do"
          {...register("title")}
        ></input>
      </form>
    </FormWrapper>
  );
};

export default Form;
