import { SearchForm, Input, SearchButton, Label } from './SearchBar.styled';
import { BsSearchHeartFill } from 'react-icons/bs';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <Input type="text" name="query" autoFocus autoComplete="off" />
      <SearchButton type="submit">
        <Label>
          Search
          <BsSearchHeartFill style={{ width: 20, height: 20 }} />
        </Label>
      </SearchButton>
    </SearchForm>
  );
};
