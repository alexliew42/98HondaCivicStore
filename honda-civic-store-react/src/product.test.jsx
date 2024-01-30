import { describe, expect, it } from 'vitest';
import { render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Products from './components/Product.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('Products Component', () => {
  it('Renders', async() => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    );
    await waitFor(() => {
        expect(screen.getByText("1998 Honda Civic")).toBeInTheDocument();
      });
  });
});