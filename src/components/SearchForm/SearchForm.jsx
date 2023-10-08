import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearch] = useState('');

  const onInputChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      console.log('Write your request');
      return;
    }
    onSubmit(searchQuery);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={onInputChange}
        placeholder="Search a movie you want"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
