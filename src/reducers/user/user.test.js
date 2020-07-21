import {reducer, ActionType, ActionCreator} from "./user.js";
import {AuthorizationStatus} from "../../const.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Action creator returns correct action`, () => {
  expect(ActionCreator.changeAuthorizationStatus(`1`)).toEqual({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: `1`,
  });
});
