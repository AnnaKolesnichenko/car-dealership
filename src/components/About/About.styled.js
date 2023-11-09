import styled from 'styled-components';

export const StyledHero = styled.section`
  height: 500px;
  width: 100%;
  background-color: #24485b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledServices = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  list-style: none;
`;

export const StyledService = styled.li`
  color: white;
  font-size: 22px;
`;

export const StyledImage = styled.img`
  width: 200px;
  height: auto;
  fill: white;
`;

export const StyledTitle = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 76px;
`;
