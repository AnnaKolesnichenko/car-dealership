import styled from 'styled-components';

export const StyledContainer = styled.div`
  /* padding: 40px 40px; */
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  max-width: 1024px;
  padding: 36px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  padding: 0;
  /* padding: 0 40px; */
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
  font-family: 'Manrope', sans-serif;
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
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  list-style: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
`;

export const SpecialsItem = styled.li`
  width: calc((100% - 100px) / 4);
  border-bottom: 1px solid #7aafcc;
  padding: 7px;
`;

export const SpecialsTitle = styled.h2`
  font-family: 'Manrope', sans-serif;
  text-align: left;
  color: #24485c;
  font-size: 28px;
  letter-spacing: 2px;
  margin-top: 0;
  margin-bottom: 30px;
  margin-top: 70px;
  padding: 6px;
  border-bottom: 1px solid #24485c;
`;

export const StyledDescrTitle = styled.h2`
  font-family: 'Manrope', sans-serif;
  font-size: 22px;
  color: white;
`;

export const StyledDescrP = styled.p`
  font-family: 'Manrope', sans-serif;
  color: white;
  font-size: 16px;
`;

export const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: #7aafcc;
  cursor: pointer;
`;
