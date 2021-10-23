import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchContacts} from '../../redux/contacts/contacts-operations'
import Container from '../Container';
import HomeView from '../../views/HomeView';
import LoginView from '../../views/LoginView';
import RegisterView from '../../views/RegisterView';
import ContactsView from '../../views/ContactsView';


function App({ fetchContacts }) {
  fetchContacts();
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

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts())
})

export default connect(null, mapDispatchToProps)(App);


