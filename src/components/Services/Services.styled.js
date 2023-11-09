import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  /* padding: 40px 40px; */
  margin-left: auto;
  margin-right: auto;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  padding: 0;
  padding: 0 40px;
  margin: 0;
`;

export const StyledItem = styled.li`
  width: calc((100% - 30px) / 3);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  padding: 7px 7px;
  //border: 1px solid #24485c;
  box-shadow: 1px 1px 10px #b1c5d0;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  color: #24485c;
`;

export const StyledDescription = styled.p`
  font-size: 20px;
`;

export const Specials = styled.div`
  margin-top: 100px;
  background-color: #24485b;
  padding: 40px 40px;
`;

export const StyledSpecials = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
`;

export const SpecialsItem = styled.li`
  width: calc((100% - 40px) / 2);
  border-bottom: 1px solid #7aafcc;
  padding: 7px;
`;

export const SpecialsTitle = styled.h2`
  text-align: center;
  color: #24485c;
  font-size: 36px;
  letter-spacing: 2px;
  margin-top: 0;
  margin-bottom: 50px;
  margin-top: 40px;
`;

export const StyledDescrTitle = styled.h2`
  font-size: 18px;
  color: white;
`;

export const StyledDescrP = styled.p`
  color: white;
  font-size: 18px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #7aafcc;
  cursor: pointer;
`;
