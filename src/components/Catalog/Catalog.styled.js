import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  padding: 0px 128px;
  padding-right: 36px;
  padding-left: 36px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledOptions = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 150px;
  height: 46px;
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 12px 0px 0px 12px;
  background-color: #f1f3f6;
  font-family: 'Manrope, sans-serif';
  transition: border-color 0.3s ease; /* Add transition for a smoother effect */

  &:hover {
    border-color: #24485b;
    border: 1px solid #24485b;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 200px;
  height: 46px;
  font-size: 16px;
  font-family: 'Manrope, sans-serif';
  text-transform: capitalize;
  background-color: #24485b;
  border: none;
  padding: 12px 99px;
  border-radius: 12px;
  color: white;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  font-family: 'Manrope, sans-serif';
  color: #8a8a89;
  margin-bottom: 4px;
  margin-left: 4px;
`;
