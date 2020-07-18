import {extend} from '../../utils.js';
import {AuthorizationStatus} from "../../const.js";

const ActionType = {
  CHANGE_AUTHORIZATION_STATUS: `CHANGE_AUTHORIZATION_STATUS`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionCreator = {
  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
