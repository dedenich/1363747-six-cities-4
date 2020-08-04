import React from 'react';
import renderer from 'react-test-renderer';
import withAuthForm from "./with-auth-form.jsx";
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const MockComponent = () => <div></div>;

const MockComponentWrapped = withAuthForm(MockComponent);

it(`withAuthForm is rendered correctly`, () => {
  const store = mockStore({
    authorizationStatus: `NO_AUTH`,
    authInfo: null,
  });
  const tree = renderer
  .create(
      <Provider store={store}>
        <MockComponentWrapped/>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
