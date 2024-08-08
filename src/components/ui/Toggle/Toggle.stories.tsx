import type { Meta, StoryObj } from '@storybook/react';
import { Bold } from 'lucide-react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/ui/Toggle',
  component: Toggle,
  args: {},
};

export default meta;

export const Variants = () => {
  return (
    <div className="flex space-x-4">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
};
