import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';

export const StyledCarItem = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  overflow: hidden;
  padding-bottom: 0;
  border-radius: 14px;
  margin-bottom: 18px;
`;

export const StyledCarTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCarname = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  margin-top: 14px;
`;

export const StyledCarImg = styled.img`
  width: 401px;
  height: 268px;
  border-radius: 14px;

  &:nth-child(4n + 1) {
    margin-left: -13px; /* 1st item in a row */
  }

  &:nth-child(4n + 2) {
    margin-left: -73px; /* 2nd item in a row */
  }

  &:nth-child(4n + 3) {
    margin-left: -93px; /* 3rd item in a row */
  }

  &:nth-child(4n + 4) {
    margin-left: -44px; /* 4th item in a row */
  }
`;

export const StyledCarList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 27px;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 42px;
  ${StyledCarItem} + ${StyledCarItem} ${StyledCarImg} {
    margin-left: -73px;
  }
  ${StyledCarItem} + ${StyledCarItem} + ${StyledCarItem} ${StyledCarImg} {
    margin-left: -93px;
  }
  ${StyledCarItem} + ${StyledCarItem} + ${StyledCarItem} + ${StyledCarItem} ${StyledCarImg} {
    margin-left: -44px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: rgb(52, 112, 255);
  margin-bottom: 0px;
  padding: 12px 99px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  color: white;
  font-family: 'Manrope', sans-serif;
`;

export const FiHeartStyled = styled(FiHeart)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
