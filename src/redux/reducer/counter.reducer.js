import * as actionTypes from "../actionTypes";

const initval = {
  counter: 0,
};

export const counterreducer = (state = initval, action) => {
  switch (action.type) {
    case actionTypes.INCR_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case actionTypes.DECR_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
