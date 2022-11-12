import React from 'react';
import { Header } from './Header';

export default {
  title: 'Mysite/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    ),
  ],
};


export const Hossein = (args) => (<Header {...args} />);
Hossein.args = {
  name : "Hossein Simchi"
}

