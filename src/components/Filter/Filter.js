import FilterStyled, { Label } from './Filter.styled';

export const Filter = ({ filter, updateFilter }) => {
  const handleChange = e => {
    updateFilter(e.target.value);
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
