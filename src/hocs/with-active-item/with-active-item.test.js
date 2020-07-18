import React from 'react';
import renderer from 'react-test-renderer';
import withActiveItem from './with-active-item.jsx';

const MockComponent = () => <div></div>;

const MockComponentWrapped = withActiveItem(MockComponent);

it(`withAudio is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
