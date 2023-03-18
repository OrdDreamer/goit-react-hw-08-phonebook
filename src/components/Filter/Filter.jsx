import styles from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery } from '../../redux/filters/selectors';
import { changeSearchQuery } from '../../redux/filters/slice';

const Filter = () => {

  const term = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeSearchQuery(event.currentTarget.value))
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type='text'
        name='filter'
        placeholder='Search...'
        value={term}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
