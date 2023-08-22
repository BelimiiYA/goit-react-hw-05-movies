import styled from '@emotion/styled';

export const SearchForm = styled.form`
  margin-left: 235px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #021c1e;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 24px 8px;
  outline: none;

  &:hover {
    color: #686868;
    border: 3px solid #686868;
  }
`;

export const SearchButton = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #021c1e;
  color: #021c1e;
  font-weight: 600;
  font-size: 20px;
  border-radius: 24px 8px;

  &:hover {
    color: #686868;
    border: 3px solid #686868;
  }
`;
export const Label = styled.span`
  display: flex;
  justify-content: center;
  gap: 8px;
  font: inherit;
  font-size: 20px;
`;
