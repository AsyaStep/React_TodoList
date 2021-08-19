import { $CombinedState } from "redux";

const initState = {
  point: [],
};

const actionType = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: " REMOVE_TASK",
  EDIT_TASK: "EDIT_TASK",
  SET_TASK_LOCALSTORAGE: "SET_TASK_LOCALSTORAGE",
  REMOVE_ALL_TODOS: "REMOVE_ALL_TODOS"
};

export const actionCreateTodo = (payload) => {
  return {
    type: actionType.ADD_TASK,
    payload,
  };
};

export const actionDeleteTodo = (payload) => {
  return {
    type: actionType.REMOVE_TASK,
    payload,
  };
};

export const actionEditTodo = (payload) => {
  return {
    type: actionType.EDIT_TASK,
    payload,
  };
};

export const actionSetLocalStorage = (payload) => {
  return {
    type: actionType.SET_TASK_LOCALSTORAGE,
    payload,
  };
};

export const actionRemoveAllTodos = () => {
  return{
    type: actionType.REMOVE_ALL_TODOS
  }
}

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_TASK:
      return { ...state, point: [...state.point, action.payload] };
    case actionType.REMOVE_TASK:
      return {
        ...state,
        point: state.point.filter((item) => item.idTask !== action.payload),
      };
    case actionType.EDIT_TASK:
      return {
        ...state,
        point: state.point.map((item) =>
          item.idTask === action.payload.id
            ? {
                ...item,
                title: action.payload.title,
                task: action.payload.task,
              }
            : item
        ),
      };
      case actionType.SET_TASK_LOCALSTORAGE:
        return {
          ...state, point: [...state.point, ...action.payload.point]
        };
        case actionType.REMOVE_ALL_TODOS:
          return{
            ...state, point: []
          }
    default:
      return state;
  }
};

export default taskReducer;
