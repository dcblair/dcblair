import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'This is a card.',
    className: 'w-full md:w-72',
    header: <h2>About</h2>,
  },
};

export const Secondary: Story = {
  args: {
    children: 'This is also a card.',
    className: 'w-full md:w-72',
    header: <h2>About</h2>,
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: (
      <>
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="size-2 rounded-full bg-slate-700" />

        <h2 className="font-nunito text-xl font-bold tracking-wider">Email</h2>
      </>
    ),
    className: 'w-full md:w-72 space-x-4',
    variant: 'tertiary',
  },
};

export const WithoutHeader: Story = {
  args: {
    children: 'This is a card without a header.',
    className: 'w-full md:w-72',
    variant: 'primary',
  },
};
