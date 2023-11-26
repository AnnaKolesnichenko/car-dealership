import styled from 'styled-components';

export const StyledHero = styled.section`
  height: 700px;
  width: 100%;
  background-color: #24485b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1024px;
  padding: 36px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
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
  font-family: 'Manrope', sans-serif;
  color: white;
  font-size: 26px;
`;

export const StyledImage = styled.img`
  width: 300px;
  height: auto;
  fill: white;
`;

export const StyledTitle = styled.h1`
  font-family: 'Manrope', sans-serif;
  color: white;
  text-transform: uppercase;
  font-size: 76px;
`;
