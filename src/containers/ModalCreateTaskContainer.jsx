import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCreateTask from "../components/Modals/ModalCreateTask";
import { actionCreateTodo } from "../store/todos";
import { actionModalHide } from "../store/modals/index";
import { getTodo } from "../store/todos/selectors";
import { useEffect } from "react";

export default function ModalCreateTaskContainer() {
  const { point } = useSelector((state) => getTodo(state));
  const dispatch = useDispatch();
  const [change, setChange] = useState({ titleTodo: "", taskTodo: "" });
  const [titleError, setTitleError] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (titleError) {
      setFormValid(false);
      console.log(formValid);
    } else {
      setFormValid(true);
      console.log(formValid);
    }
  }, [titleError]);

  const handlerChangeTitleTodo = (e) => {
    setChange({ ...change, titleTodo: e.target.value });
    if (e.target.value.length > 10) {
      setTitleError("Заголовок должен быть не длиннее 10 символов");
    } else if (!e.target.value) {
        setTitleError("Поле обязательное");
    } else {
      setTitleError("");
    }
  };

  const handlerChangeTaskTodo = (e) => {
    return setChange({ ...change, taskTodo: e.target.value });
  };

  const handlerAddTodo = () => {
    const data = {
      title: change.titleTodo,
      task: change.taskTodo,
      idTask: Date.now(),
    };
    dispatch(actionCreateTodo(data));
    hideModal();
  };

  const hideModal = () => {
    dispatch(actionModalHide());
  };

  return (
    <ModalCreateTask
      point={point}
      change={change}
      titleError={titleError}
      formValid={formValid}
      handlerChangeTitleTodo={handlerChangeTitleTodo}
      handlerChangeTaskTodo={handlerChangeTaskTodo}
      handlerAddTodo={handlerAddTodo}
      hideModal={hideModal}
    />
  );
}
