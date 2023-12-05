import { useDispatch, useSelector } from 'react-redux';
import FilterStyled, { Label } from './Filter.styled';

import { getFilter, setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterStyled>
      <Label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          required
          onChange={handleChange}
        />
      </Label>
    </FilterStyled>
  );
};
