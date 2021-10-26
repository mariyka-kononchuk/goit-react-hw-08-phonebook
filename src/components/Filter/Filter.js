import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action';
import {getFilter} from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import { Wrapper } from './Filter.styled'
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';

const Filter = ({ value, onChange }) => (
  <Wrapper>
    <Typography
      sx={{         
        color: '#42a5f5',    
      }}
      variant="h6"
      component="div"
      gutterBottom>
          Find contacts by name
    </Typography>
    <OutlinedInput
      sx={{         
        width: 250,
        height: 40,    
      }}
      type="text"
      value={value}
      onChange={onChange}/>
  </Wrapper>
)

const mapStateToProps = state => {
  return {
      value: getFilter(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(actions.changeFilter(e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    value: PropTypes.string,
    onChange:PropTypes.func.isRequired
};