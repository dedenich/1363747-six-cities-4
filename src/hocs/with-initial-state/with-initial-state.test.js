import React from 'react';
import renderer from 'react-test-renderer';
import withInitialState from './with-initial-state.jsx';

const MockComponent = () => <div></div>;

const MockComponentWrapped = withInitialState(MockComponent);

it(`withAudio is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
