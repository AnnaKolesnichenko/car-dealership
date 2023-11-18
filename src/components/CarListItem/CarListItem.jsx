import { StyledAboutLi, StyledDescription } from './CarListItem.styled';

const CarListItem = ({ car, address }) => {
  return (
    <StyledDescription>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <StyledAboutLi>{address[1]} |</StyledAboutLi>{' '}
        <StyledAboutLi>| {address[2]} |</StyledAboutLi>{' '}
        <StyledAboutLi> | {car.rentalCompany} </StyledAboutLi>{' '}
        {/* <li>{car.}</li> */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <StyledAboutLi>{car.type} |</StyledAboutLi>{' '}
        <StyledAboutLi>| {car.make} | </StyledAboutLi>{' '}
        <StyledAboutLi>| {car.mileage} | </StyledAboutLi>{' '}
        <StyledAboutLi>| {car.accessories[-1]}</StyledAboutLi>
      </div>
    </StyledDescription>
  );
};

export default CarListItem;
