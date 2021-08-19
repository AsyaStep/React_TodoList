import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalEditTask from "../components/Modals/ModalEditTask";
import { actionModalHide } from "../store/modals";
import { actionEditTodo } from "../store/todos";
import { getTodo } from "../store/todos/selectors/index";

export default function ModelEditTaskContainer({id}) {
  const { point } = useSelector((state) => getTodo(state));    
  const findTask = point.find((item) => item.idTask === id);
 
  const dispatch = useDispatch();

  const [update, updateValue] = useState({
    title: findTask.title,
    task: findTask.task,
  });
  console.log(update)
  const handlerChangeInputTitle = (event) => {
    return updateValue({
      ...update,
      title: event.target.value,
    });
  };

  const handlerChangeInputTask = (event) => {
    return updateValue({
      ...update,
      task: event.target.value,
    });
  };

  const hideModal = () => {
    dispatch(actionModalHide());
  };

  const handlerEditTodo = () => {      
      const data = {
          title: update.title,
          task: update.task,
          id
      }
      dispatch(actionEditTodo(data));
      hideModal();
  }

  return (    
    <ModalEditTask
      update={update}
      findTask={findTask}
      hideModal={hideModal}
      handlerChangeInputTitle={handlerChangeInputTitle}
      handlerChangeInputTask={handlerChangeInputTask}
      handlerEditTodo={handlerEditTodo}
    />
  );
}
