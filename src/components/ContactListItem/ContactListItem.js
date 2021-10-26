import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import Button from '@mui/material/Button';
import { DeleteOutline } from '@mui/icons-material';
import { Item, Contact, Name, Number } from './ContactListItem.styled'

const ContactListItem = ({contacts, onDeleteContact }) => (
    <Item>
        <Contact>
            <Name>{contacts.name}:</Name>
            <Number>{contacts.number}</Number>
        </Contact>
    <Button
      sx={{
        width: 120,
      }}
      variant="contained"
      onClick={() => onDeleteContact(contacts.id)}
      endIcon={<DeleteOutline />}>
      Delete
    </Button>
    </Item> 
)

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (contactId) => dispatch(deleteContact(contactId)),
  }
}

export default connect(null, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }),
    onDeleteContact:PropTypes.func.isRequired
};