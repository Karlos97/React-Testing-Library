import { logRoles, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
describe('Header component', () => {
  const expectedButtonText = 'Back';

  test('testing headers navigation button unavaible', () => {
    render(
      <BrowserRouter>
        <Header isMainpage={false} />
      </BrowserRouter>
    );
    const outputElement = screen.queryByText(expectedButtonText, {
      exact: true,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('testing headers navigation button unavaible', () => {
    render(
      <BrowserRouter>
        <Header isMainpage={true} />
      </BrowserRouter>
    );

    const outputElement = screen.queryByText(expectedButtonText, {
      exact: true,
    });
    expect(outputElement).toBeNull();
  });
});
