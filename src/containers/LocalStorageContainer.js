import LocalStorageBlock from "../components/LocalStorageBlock";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../store/todos/selectors";
import { actionRemoveAllTodos, actionSetLocalStorage } from "../store/todos/index"

export default function LocalStorageContainer (){
  const { point } = useSelector((state) => getTodo(state));
  const dispatch = useDispatch();

  const saveTodoLocalStorage = () => {
    window.localStorage.setItem("todos", JSON.stringify({ point }));
  };

  const deleteTodoLocalStorage = () => {
    window.localStorage.removeItem("todos");
    dispatch(actionRemoveAllTodos());
  };

  const getTodoLocalStorage = () => {
    const getTodo = window.localStorage.getItem("todos");
    const resultJSON = JSON.parse(getTodo);
    resultJSON && dispatch(actionSetLocalStorage(resultJSON));
  };

  useEffect(() => {
    getTodoLocalStorage();
  }, []);
  return (
    <LocalStorageBlock
      saveTodoLocalStorage={saveTodoLocalStorage}
      deleteTodoLocalStorage={deleteTodoLocalStorage}
      getTodoLocalStorage={getTodoLocalStorage}
    />
  );
};
