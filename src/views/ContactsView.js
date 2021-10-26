import React, {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import Typography from '@mui/material/Typography';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch])
    return (
      <div>
        <Typography
          sx={{         
            color: '#808090',    
          }}
          variant="h5"
          component="div"
          gutterBottom>
          Create new contact
        </Typography>
        <ContactForm />
        {/* <Typography
          sx={{         
            color: '#808090',    
          }}
          variant="h4"
          component="div"
          gutterBottom>
          Contacts
        </Typography> */}
        <Filter />
        <ContactList />
      </div>
    )
}

