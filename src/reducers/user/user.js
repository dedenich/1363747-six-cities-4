import {extend} from '../../utils.js';
import {AuthorizationStatus} from "../../const.js";
import convertAuthData from '../../adapters/auth-info.js';

const ActionType = {
  CHANGE_AUTHORIZATION_STATUS: `CHANGE_AUTHORIZATION_STATUS`,
  CHANGE_AUTH_INFO: `CHANGE_AUTH_INFO`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: null,
};

const ActionCreator = {
  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),
  changeAuthInfo: (authInfo) => ({
    type: ActionType.CHANGE_AUTH_INFO,
    payload: authInfo,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.CHANGE_AUTH_INFO:
      return extend(state, {
        authInfo: action.payload,
      });
    default:
      return state;
  }
};

const Operation = {
  login: (authData) => (dispatch, getState, api) => (
    api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        const newAuthData = convertAuthData(response.data);

        dispatch(ActionCreator.changeAuthInfo(newAuthData));
        dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
      })
      .catch((error) => {
        throw error;
      })
  ),
  checkAuth: () => (dispatch, getState, api) => (
    api.get(`/login`)
      .then((response) => {
        const newAuthData = convertAuthData(response.data);
        dispatch(ActionCreator.changeAuthInfo(newAuthData));
        dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
      })
      .catch((error) => {
        throw error;
      })
  ),
};

export {reducer, ActionType, ActionCreator, Operation};
