import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BusySpinner from '.';

export default {
  title: 'lib/components/BusySpinner',
  component: BusySpinner,
  decorators: [ withKnobs ]
};

const rootStyle: React.CSSProperties = {
  backgroundColor: '#F0F0F0',
  color: '#000000',
  padding: '1rem'
};
addDecorator((storyFn) => (<div style={rootStyle}>{storyFn()}</div>));

/* Story #1 - the component is busy */
export const normal: React.SFC<{}> = () => (
  <BusySpinner isBusy={boolean('isBusy', false)} onClick={action('onClick')}>
    This is some content
  </BusySpinner>
);
