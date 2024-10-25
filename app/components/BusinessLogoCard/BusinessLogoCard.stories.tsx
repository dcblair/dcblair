import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BusinessLogoCard } from './BusinessLogoCard';
import { IconComcastBusiness } from '../Icons';

const meta = {
  title: 'BusinessLogoCard',
  component: BusinessLogoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof BusinessLogoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO: wrap this in a router
export const WithLink: Story = {
  args: {
    icon: <IconComcastBusiness />,
    to: 'https://business.comcast.com',
  },
};

export const WithoutHeader: Story = {
  args: {
    withLink: false,
    icon: <p>no link here</p>,
  },
};
