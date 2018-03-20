import React from 'react';
import { shallow } from 'enzyme';

import Text from '../Text/Text';

import BulletList from './BulletList';

describe('BulletList', () => {
  it('renders with standard text', () => {
    const wrapper = shallow(
      <BulletList>
        <Text>Foo</Text>
        <Text>Bar</Text>
      </BulletList>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
