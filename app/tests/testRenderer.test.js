const React = require('react');
const ReactTestRenderer = require('react-test-renderer');

it('does things', () => {
  const inst = ReactTestRenderer.create(React.createElement('h1', null, 'qwe'));
  console.log(inst.toJSON());
  expect(inst.toJSON()).toMatchSnapshot();
});
