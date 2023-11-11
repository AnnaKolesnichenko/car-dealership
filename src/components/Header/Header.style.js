import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  padding: 36px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
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

export const StyledListItem = styled(Link)`
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
