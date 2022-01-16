import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import UsersList from '../../components/UsersList/UsersList';
import reducerRoot from '../../store/reducers/index';

describe('Async component', () => {
  const store = createStore(reducerRoot, applyMiddleware(thunk));

  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          login: 'bmizerany',
          id: 46,
          avatar_url: 'https://avatars.githubusercontent.com/u/46?v=4',
          html_url: 'https://github.com/bmizerany',
        },
      ],
    });
    render(
      <Provider store={store}>
        <UsersList />
      </Provider>
    );

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
