import React, {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import {fetchContacts} from '../redux/contacts/contacts-operations'
//import s from './App.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch])
    return (
        <div>
          <h1 className=''>Phonebook</h1>
          <ContactForm />
          <h2 className=''>Contacts</h2>
          <Filter />
          <ContactList />
        </div>)
}

