import React, { useEffect, Suspense, lazy } from 'react';
import {useSelector, useDispatch} from 'react-redux' 
import { Switch } from 'react-router-dom';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import { getIsFetchingCurrent } from '../../redux/auth/auth-selectors';
import Container from '../Container';
import AppBar from '../AppBar';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

const HomeView = lazy(() => import('../../views/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView'));
const ContactsView = lazy(() => import('../../views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
  
  return (
    !isFetchingCurrentUser && (
       <Container>
        <AppBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
            
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>

            </Switch>
          </Suspense>
      </Container>
    )
  );
}



