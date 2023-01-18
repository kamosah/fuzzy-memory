import { render } from '@testing-library/react';

import NewOrgTheme from './NewOrgTheme';

describe('NewOrgTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewOrgTheme>Hello World</NewOrgTheme>);
    expect(baseElement).toBeTruthy();
  });
});
