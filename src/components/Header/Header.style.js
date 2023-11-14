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
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #2e6484;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  position: relative; /* Ensure the pseudo-element is positioned relative to the link */

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0; /* Initially, the border has zero width */
    height: 2px; /* Set the height and color of your border */
    background-color: #2e6484; /* Set the color of your border */
    transition: width 0.3s ease; /* Set the transition for width changes */
  }

  /* Add hover effect to the link */
  &:hover::before {
    width: 100%; /* On hover, expand the border to 100% width */
  }
`;

export const StyledRegistration = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
