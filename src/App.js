import React, {useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {loadUsers} from './redux/users/users';
import SearchBar from './components/search/SearchBar';
import './styles/base.scss';
import './app.scss';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users, shallowEqual);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  console.log(users);

  return (
    <main>
      <SearchBar />
    </main>
  );
}

export default App;
