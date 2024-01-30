import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Cart from './components/cart.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('Cart Component', () => {
  it('Renders', () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
    let element = screen.getByText('There is nothing in your cart');
    expect(element).toBeInTheDocument();
  });
});