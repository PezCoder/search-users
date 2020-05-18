import React, {useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {loadUsers} from './redux/users/users';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users, shallowEqual);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  console.log(users);

  return (
    <div className="App">
    </div>
  );
}

export default App;
