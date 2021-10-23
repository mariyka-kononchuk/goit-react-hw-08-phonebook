import React from 'react';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
//import s from './App.module.css';

export default function ContactsView() {
    return (
        <div>
          <h1 className=''>Phonebook</h1>
          <ContactForm />
          <h2 className=''>Contacts</h2>
          <Filter />
          <ContactList />
        </div>)
}