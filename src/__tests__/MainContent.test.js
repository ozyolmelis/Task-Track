import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MainContent from '../path-to-your-components/MainContent';

test('renders a todo item and allows checking it off', () => {
  render(<MainContent />);

  
  const todoInput = screen.getByPlaceholderText('Add a new todo');
  fireEvent.change(todoInput, { target: { value: 'Test Todo' } });
  fireEvent.click(screen.getByText('Add'));

  
  const todoItem = screen.getByText('Test Todo');
  expect(todoItem).toBeInTheDocument();


  fireEvent.click(screen.getByText('Check'));


  expect(todoItem).toHaveStyle({ textDecoration: 'line-through' });
});
