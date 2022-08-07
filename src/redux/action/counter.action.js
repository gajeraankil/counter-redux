import * as actionTypes from "../actionTypes";

export const incrAction = () => (dispatch) => {
  dispatch({ type: actionTypes.INCR_COUNTER });
};

export const decrAction = () => (dispatch) => {
  dispatch({ type: actionTypes.DECR_COUNTER });
};
