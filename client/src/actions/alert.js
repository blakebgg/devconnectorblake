import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// i want to be able to dispatch more than one action type from this fuction here, we have something called dispatch.
// it can do this because of the thunk middleware

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);

  // how does this get sent to reducer?
};
