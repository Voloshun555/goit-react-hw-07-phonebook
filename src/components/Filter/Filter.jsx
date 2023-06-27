import css from './Filter.module.css';
import { selectFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <label className={css.fiterForm}>
        filter
        <input
          className={css.inputTitle}
          type="name"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
};



