import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const BackdropStyled = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  /* margin: auto; */
  opacity: 1;
  background: rgba(46, 47, 66, 0.6);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 541px;
  box-sizing: border-box;
  padding: 41px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 24px;
  z-index: 100;
  transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
`;

export const ImageStyled = styled.img`
  width: 469px;
  height: auto;
  border-radius: 14px;
  /* margin-top: -25px; */
  margin-left: -5px;
  margin-bottom: 14px;
`;

export const ContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const TitleStyled = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  margin-bottom: 10px;
`;

export const AboutStyled = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-bottom: 4px;
`;

export const AboutItemStyled = styled.li`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #121417;
`;

export const DescripitonStyled = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  margin-top: 14px;
`;

export const SubTitleStyled = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
  margin-top: 20px;
`;

export const AccessoriesListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 2px;
`;

export const AccessoriesItemStyled = styled.li`
  font-family: 'Manrope', sans-serif;
  margin-right: 3px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #121417;
`;

export const RentalListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RentalItemStyled = styled.li`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const RentalCarBtn = styled.button`
  padding: 12px 50px;
  margin-top: 14px;
  border-radius: 12px;
  border: none;
  background-color: #24485b;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  font-family: 'Manrope', sans-serif;
  color: white;
`;

export const AiCrossStyled = styled(AiOutlineClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
`;
