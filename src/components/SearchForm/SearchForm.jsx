const SearchForm = ({ handleQuery, queryParams, setPage }) => {
  const updateQueryString = e => {
    const movieQuery = e.target.value.toLowerCase();
    if (movieQuery === '') {
      return handleQuery({});
    }
    handleQuery({ query: movieQuery });
    setPage(1);
  };

  return (
    <>
      <input
        type="text"
        value={queryParams}
        onChange={updateQueryString}
        placeholder="Search a movie you want"
      />
    </>
  );
};

export default SearchForm;
