import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';
import { connect } from 'react-redux';
import actionsExport from '../../redux/actions';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actionsExport.filterContact(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
