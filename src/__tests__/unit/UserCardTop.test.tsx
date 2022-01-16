import { render, screen } from '@testing-library/react';
import UserCardTop from '../../components/UserCardTop/UserCardTop';

import '@testing-library/jest-dom/extend-expect';

describe('User Card Top Component', () => {
  const elementLogin = 'mojombo';
  const elementId = 1;
  const elementHtml_url = 'https://github.com/mojombo';
  const elementAvatar_url = 'https://avatars.githubusercontent.com/u/1?v=4"';
  const elementIsUserDetails = true;
  test('renders <UserCardTop', () => {
    // Arrange
    render(
      <UserCardTop
        login={elementLogin}
        id={elementId}
        html_url={elementHtml_url}
        avatar_url={elementAvatar_url}
        isUserDetails={elementIsUserDetails}
      />
    );
    const loginPresence = screen.getByText(elementLogin, {
      exact: true,
    });
    const idPresence = screen.getByText(`ID: #${elementId}`, {
      exact: true,
    });
    expect(screen.getByText('GitHub page').closest('a')).toHaveAttribute(
      'href',
      elementHtml_url
    );

    expect(loginPresence && idPresence).toBeTruthy();
  });
  test('renders <UserCardTop as userdetails', () => {
    render(
      <UserCardTop
        login={elementLogin}
        id={elementId}
        html_url={elementHtml_url}
        avatar_url={elementAvatar_url}
        isUserDetails={elementIsUserDetails}
      />
    );

    expect(
      screen.getByText('username', {
        exact: true,
      })
    ).toBeInTheDocument();
  });
  test('renders <UserCardTop as userslist', () => {
    render(
      <UserCardTop
        login={elementLogin}
        id={elementId}
        html_url={elementHtml_url}
        avatar_url={elementAvatar_url}
        isUserDetails={!elementIsUserDetails}
      />
    );
    expect(
      screen.queryByText('username', {
        exact: true,
      })
    ).toBeNull();
  });
});
