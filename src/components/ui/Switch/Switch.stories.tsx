import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/ui/Switch',
  component: Switch,
  args: {},
};

export default meta;

export const Variants = () => {
  return (
    <div className="flex space-x-4">
      <Switch />
    </div>
  );
};
