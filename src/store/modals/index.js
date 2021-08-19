const initState = [];

const actionsTypes = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
};

export const actionModalShow = (payload) => {
  return {
    type: actionsTypes.SHOW_MODAL,
    payload,
  };
};

export const actionModalHide = () => {
  return {
    type: actionsTypes.HIDE_MODAL,
  };
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsTypes.SHOW_MODAL:
      return [...state, action.payload];
    case actionsTypes.HIDE_MODAL:
      state.splice(-1, 1);
      return [...state];
    default:
      return state;
  }
};

export default modalReducer;
