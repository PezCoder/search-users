import React, {useEffect} from 'react';
import './styles/reset.scss';
import './styles/base.scss';
import './app.scss';
import SearchUsers from './components/search/SearchUsers';

function App() {
  return (
    <main>
      <SearchUsers />
    </main>
  );
}

export default App;
