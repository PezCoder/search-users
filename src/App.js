import React from 'react';
import './styles/reset.scss';
import './styles/base.scss';
import './app.scss';
import SearchUsers from './components/search-users/SearchUsers';

function App() {
  return (
    <main>
      <h4 className="hint">Search Users</h4>
      <p class="hint-details">You can use Mouse or Keyboard Arrow keys (Up/Down) to navigate the list</p>
      <section className="search">
        <SearchUsers />
      </section>
    </main>
  );
}

export default App;
