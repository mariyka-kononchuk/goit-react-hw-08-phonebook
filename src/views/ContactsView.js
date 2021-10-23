import React from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import s from './App.module.css';

export default function HomeView() {
    return (
        <div>
          <h1 className={s.titlePhonebbok}>Phonebook</h1>
          <ContactForm />
          <h2 className={s.titleContacts}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>)
}