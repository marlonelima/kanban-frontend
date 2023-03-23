import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  action: 'primary',
  text: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  action: 'secondary',
  text: 'Secondary button',
};

export const Caution = Template.bind({});
Caution.args = {
  action: 'caution',
  text: 'Secondary button',
};
