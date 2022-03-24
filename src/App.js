import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { NavBar } from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from './components/Spinner';

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <Router>
      <NavBar />
     <AppRouter />
    </Router>
  );
});

export default App;
