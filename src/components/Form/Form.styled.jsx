import styled from '@emotion/styled';
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #021C1E;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 4px 8px;
  outline: none;

  &:hover {
    color: #6FB98F;
    border: 3px solid #6FB98F;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #021C1E;
  color: #021C1E;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px 8px;

  &:hover {
    color: #6FB98F;
    border: 3px solid #6FB98F;
  }
`;
