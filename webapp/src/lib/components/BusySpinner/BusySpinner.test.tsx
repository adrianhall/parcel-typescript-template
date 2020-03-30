/* eslint-env jest */
import { shallow, render } from 'enzyme';
import React from 'react';
import BusySpinner from '.';

describe('BusySpinner', () => {
  it('spins busy when isBusy is true', () => {
    const actual = shallow(
      <BusySpinner isBusy>
        <p data-id="test-data">Test Data</p>
      </BusySpinner>
    );
    expect(actual).toMatchSnapshot();
  });

  it('displays the content when isBusy is false', () => {
    const actual = render(
      <BusySpinner>
        <p data-id="test-data">Test Data</p>
      </BusySpinner>
    );
    const content = actual.find('[data-id="test-data"]');
    expect(content).toBeDefined();
  });
});
