import React from 'react';
import { render } from '@testing-library/react';

import NewOrgTheme from './NewOrgTheme';

describe('<NewOrgTheme />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewOrgTheme>Theme</NewOrgTheme>);
    expect(baseElement).toBeTruthy();
  });
});
