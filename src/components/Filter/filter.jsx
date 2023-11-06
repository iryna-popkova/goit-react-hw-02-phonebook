import { FilterLabel, FilterInput } from './filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by name
    <FilterInput name="filter" type="text" value={value} onChange={onChange} />
  </FilterLabel>
);
