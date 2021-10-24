import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux' 
import { Switch, Route, Redirect } from 'react-router-dom';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import Container from '../Container';
import HomeView from '../../views/HomeView';
import LoginView from '../../views/LoginView';
import RegisterView from '../../views/RegisterView';
import ContactsView from '../../views/ContactsView';
import AppBar from '../AppBar';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
  
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/contacts" component={ContactsView} />
        </Switch>
       
      </Container>
    );
  
}



