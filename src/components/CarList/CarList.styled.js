import styled from 'styled-components';

export const StyledCarItem = styled.li`
  width: 274px;
  height: 426px;
  overflow: hidden;
`;

export const StyledCarTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCarname = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
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
