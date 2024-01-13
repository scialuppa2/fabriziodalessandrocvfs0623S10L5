import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import '@testing-library/jest-dom';
import { enableFetchMocks } from 'jest-fetch-mock';
import AppContainer from './components/AppContainer';
enableFetchMocks();

global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
};

test('renderizza App', () => {
  render(<App />);
});

test('ricerca una location e caricala in Weather', async () => {
  render(<App />);
  
  const searchInput = screen.getByPlaceholderText(/Search Location/i);
  userEvent.type(searchInput, 'Milano');

  const searchButton = screen.getByText(/Search/i);
  userEvent.click(searchButton);

  await waitFor(() => {
    const cityName = screen.getByText(/Milano/i);
    expect(cityName).toBeInTheDocument();
  });
});

test('controlla se NextDays si renderizza correttamente', async () => {
  render(<App />);

  const nextDaysComponent = screen.getByText(/Meteo a/i);
  expect(nextDaysComponent).toBeInTheDocument();
});
