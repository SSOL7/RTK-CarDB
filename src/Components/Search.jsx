import { useDispatch, useSelector } from 'react-redux';
import { change_search_term } from './store';

function Search() {
  const dispatch = useDispatch();
  const search_term = useSelector((store) => {
    return store.search_term;
  });

  const handle_search_change = (event) => {
    dispatch(change_search_term(event.target.value));
  };

  return (
    <div>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='Search for a car...'
        value={search_term}
        onChange={handle_search_change}
      />
    </div>
  );
}

export default Search;
