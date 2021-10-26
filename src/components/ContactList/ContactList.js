import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from './ContactList.styled'
import ContactListItem from '../ContactListItem';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';


const ContactList = ({contacts}) => (
    <List>
        {contacts.map((contacts)=> (
            <li key={contacts.id}  >
                <ContactListItem contacts={contacts}/>
            </li>
        ))}
    </List>
)

const mapStateToProps = (state) => {
    return {
        contacts: getVisibleContacts(state)
    }
  }

export default connect(mapStateToProps, null)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

 