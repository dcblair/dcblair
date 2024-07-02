import { render } from '@testing-library/react';
import { Card } from './Card';

test('Card renders correctly', () => {
  const { getByText } = render(
    <Card header={<h2>About</h2>}>
      <p>Here is some example text.</p>
    </Card>,
  );

  const card = getByText('About');
  expect(card).toBeInTheDocument();
});
