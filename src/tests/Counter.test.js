// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';
import React from 'react';
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increments = screen.getByText('+');
  userEvent.click(increments);
  const matches = screen.getByText('1');
  expect(matches).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrements = screen.getByText('-');
  userEvent.click(decrements);
  const matches = screen.getByText('-1');
  expect(matches).toBeInTheDocument();
});
