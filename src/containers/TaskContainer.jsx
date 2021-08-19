import React from "react";
// import { useEffect } from "react";
import ListTask from "../components/ListTask";
import { actionModalShow } from "../store/modals";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTodo } from "../store/todos/selectors";
// import { actionRemoveAllTodos, actionSetLocalStorage } from "../store/todos";

export default function TaskContainer() {
  const { point } = useSelector((state) => getTodo(state));
  const location = useLocation();
  const dispatch = useDispatch();

  const getValueSearch = new URLSearchParams(location.search).get("search");

  const filterTodoTitle = getValueSearch
    ? point.filter((item) =>
        item.title.toLowerCase().includes(getValueSearch.toLowerCase())
      )
    : point;

  const showModalCreate = () => {
    dispatch(actionModalShow({ name: "modalCreateTask" }));
  };

  const showModalDelete = (idTodo) => {
    dispatch(actionModalShow({ name: "modalDeleteTask", id: idTodo }));
  };

  const showModalEdit = (idTodo) => {
    dispatch(actionModalShow({ name: "modalEditTask", id: idTodo }));
  };

  // const saveTodoLocalStorage = () => {
  //   window.localStorage.setItem("todos", JSON.stringify({ point }));
  // };

  // const deleteTodoLocalStorage = () => {
  //   window.localStorage.removeItem("todos");
  //   dispatch(actionRemoveAllTodos());
  // };

  // const getTodoLocalStorage = () => {
  //   const getTodo = window.localStorage.getItem("todos");
  //   const resultJSON = JSON.parse(getTodo);
  //   resultJSON && dispatch(actionSetLocalStorage(resultJSON));
  // };

  // useEffect(() => {
  //   getTodoLocalStorage();
  // }, []);

  return (
    <ListTask
      point={filterTodoTitle}
      showModalCreate={showModalCreate}
      showModalDelete={showModalDelete}
      showModalEdit={showModalEdit}
      // saveTodoLocalStorage={saveTodoLocalStorage}
      // deleteTodoLocalStorage={deleteTodoLocalStorage}
      // getTodoLocalStorage={getTodoLocalStorage}
    />
  );
}
