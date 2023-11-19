import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  padding: 0px 128px;
  padding: 36px;
  padding-top: 30px;
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
  width: 200px;
  height: 46px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-family: 'Manrope, sans-serif';
  transition: border-color 0.3s ease; /* Add transition for a smoother effect */

  &:hover {
    border-color: #3470ff; /* Change border color on hover */
    /* Add more styles for hover state if needed */
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 46px;
  font-size: 20px;
  font-family: 'Manrope, sans-serif';
  text-transform: capitalize;
  background-color: #3470ff;
  border: none;
  padding: 12px 99px;
  border-radius: 12px;
  color: white;
`;
