import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import {AddIcCall} from '@mui/icons-material';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id: ''
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        });
    }

    handleChangeName = (event) => {
        this.setState({
            name:event.target.value
        });
    };

     handleChangeNumber = (event) => {
        this.setState({
            number:event.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        });
        const filterName = this.state.name;
    
        if (this.props.contacts.find(contact => contact.name.toLowerCase() === filterName.toLowerCase())) {
            alert(`${filterName} is already in contacts`);
            this.reset();
            return;
        }
        
        this.props.onAddContact(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        const { name, number } = this.state;
        
        return (
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    mb:2,
                    flexDirection: { xs: 'column', md: 'column' },
                    width: 400,
                    '& > :not(style)': { m: 1 },
                }}
                onSubmit={this.handleSubmit}>
                <FormControl variant="standard">
                    <InputLabel>Name</InputLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={this.handleChangeName}
                        inputProps={{ inputMode: 'text', pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" }}
                       />
                </FormControl>
                <FormControl
                    variant="standard">
                    <InputLabel>Number</InputLabel>
                    <Input
                        type="text"
                        value={number}
                        onChange={this.handleChangeNumber}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        />
                </FormControl>
                <Button
                    sx={{
                        width: 180,
                    }}
                    variant="contained"
                    type="submit"
                    endIcon={<AddIcCall />}
                >
                    Add contact
                </Button>
            </Box>
        )
    }
}
const mapStateToProps = state => {
    return {
        contacts: getContacts(state)
    }
}

const mapDispatchToProps = dispatch => {
   
  return {
    onAddContact: ({name, number}) => dispatch(addContact({name, number})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};