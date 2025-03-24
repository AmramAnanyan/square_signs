import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Interactive 2D Visualization header', () => {
  render(<App />);
  const htmlElement = screen.getByText(/Interactive 2D Visualization/i);
  expect(htmlElement).toBeInTheDocument();
});
