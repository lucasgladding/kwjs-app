import React from 'react';
import {render} from '@testing-library/react-native';

import Title from './Title';

describe('Title', () => {
  it('renders', () => {
    const text = 'Title';
    const {getByText} = render(<Title text={text} />);

    expect(getByText(text)).toBeDefined();
  });
});
