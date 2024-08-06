import { render } from '@testing-library/react';
import { Header } from './Header';
import { createRemixStub } from '@remix-run/testing';

const HeaderStub = createRemixStub([
  {
    path: '/',
    Component: Header,
  },
]);

test('Header renders correctly', () => {
  const { getByText } = render(<HeaderStub />);

  expect(getByText('Devin C Blair')).toBeInTheDocument();
  expect(getByText('About')).toBeInTheDocument();
  expect(getByText('Experience')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
});
