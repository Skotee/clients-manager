import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  onAddClient: () => void;
  onSearch: (searchTerm: string) => void;
}

const Header: FC<HeaderProps> = ({ onAddClient, onSearch }) => {
  return (
    <header className={styles.header}>
      <h1>Clients manager</h1>
      <div className={styles.navbar}>
        <button onClick={onAddClient}>New Client</button>
        <input type="text" placeholder="Search clients..." onChange={(e) => onSearch(e.target.value)} />
      </div>
    </header>
  );
};

export default Header;
