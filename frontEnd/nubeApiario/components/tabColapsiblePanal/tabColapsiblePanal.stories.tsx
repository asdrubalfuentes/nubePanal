import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {tabColapsiblePanal} from './tabColapsiblePanal';

const meta: Meta<typeof tabColapsiblePanal> = {
  component: tabColapsiblePanal,
};

export default meta;

type Story = StoryObj<typeof tabColapsiblePanal>;

export const Basic: Story = {args: {}};
