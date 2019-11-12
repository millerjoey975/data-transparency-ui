import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import { withA11Y } from '@storybook/addon-a11y';

import { Button } from '../../components/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, withA11Y],
  parameters: {
    a11y: {
      // ... axe options
      element: '.button-story__container', // optional selector which element to inspect
      config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
  }
};

export const defaultButton = () => (
  <div className="button-story__container">
    <Button text={text("text", "Click Yo Self Always")} />
  </div>
);

defaultButton.story = { name: 'Test One, Two, Three' };