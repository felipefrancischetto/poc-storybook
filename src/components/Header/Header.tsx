import React from 'react';

import { Button } from '../Button/Button';
import './header.css';

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <img src="https://www.cvc.com.br/imageproc/image/upload/f_auto,q_auto:eco,w_91/v1/CVC/platform/logo/cvc/logo.png" alt="" width="60px" ></img>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
