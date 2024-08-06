import { render } from '@testing-library/react';
import { createRemixStub } from '@remix-run/testing';
import { Footer } from './Footer';

const FooterStub = createRemixStub([
  {
    path: '/',
    Component: Footer,
  },
]);

test('Footer renders correctly', () => {
  const { queryByText } = render(<FooterStub />);

  expect(queryByText('Contact')).toBeInTheDocument();
  expect(queryByText('LinkedIn')).toBeInTheDocument();
  expect(queryByText('GitHub')).toBeInTheDocument();
  expect(queryByText('Email')).toBeInTheDocument();
});
