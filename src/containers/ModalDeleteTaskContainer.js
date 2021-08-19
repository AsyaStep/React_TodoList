import React from "react";
import ModalDeleteTask from "../components/Modals/ModalDeleteTask";
import { useDispatch } from "react-redux";
import { actionModalHide } from "../store/modals/index";
import { actionDeleteTodo } from "../store/todos/index";

export default function ModalDeleteTaskContainer({ id }) {
  const dispatch = useDispatch();

  const handlerDeleteTodo = () => {
    dispatch(actionDeleteTodo(id))
    hideModal()
  };

  const hideModal = () => {
    dispatch(actionModalHide());
  };

  return (
    <ModalDeleteTask
    handlerDeleteTodo={handlerDeleteTodo}
      hideModal={hideModal}
    />
  );
}
