import { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './formStyles';
import Icon from '../../images/search.svg';

const Form = ({ onSubmit }) => {
  const classes = useStyles(); 
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query.toLowerCase());
    setQuery('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        type="text"
        name="query"
        autoFocus
        value={query}
        placeholder="Search movie"
        onChange={handleInputChange}
      />
      <button className={classes.button} type="submit">
        <img className={classes.buttonIcon} src={Icon} alt="Search" />
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
