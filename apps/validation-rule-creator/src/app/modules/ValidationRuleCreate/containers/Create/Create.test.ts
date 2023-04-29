import { render } from '@testing-library/react';
import Create from './Create';

describe('ValidationRuleCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Create />);
    expect(baseElement).toBeTruthy();
  });
});
