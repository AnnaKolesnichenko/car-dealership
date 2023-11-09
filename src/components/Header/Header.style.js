import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 2px solid grey; */
`;

export const StyledImage = styled.img`
  width: 120px;
  height: auto;
  //margin-left: 50px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 50px;
`;

export const StyledListItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: #2e6484;
`;

export const StyledRegistration = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
