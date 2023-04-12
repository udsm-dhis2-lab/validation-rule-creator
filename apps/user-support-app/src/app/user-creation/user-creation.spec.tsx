import React from 'react';
import { render } from '@testing-library/react';

import UserCreation from './user-creation';

describe('UserCreation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserCreation />);
    expect(baseElement).toBeTruthy();
  });
});
