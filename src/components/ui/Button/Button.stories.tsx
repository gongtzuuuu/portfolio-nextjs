import { Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/ui/Button',
  component: Button,
  args: {},
};

export default meta;

export const Variants = () => {
  return (
    <div className="flex space-x-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Default</Button>
      <Button variant="ghost">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="link">Default</Button>
      <Button variant="outline">Default</Button>
    </div>
  );
};
