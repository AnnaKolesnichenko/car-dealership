import { CarBase } from 'car-base';
import { StyledCarImg, StyledCarItem, StyledCarList } from './CarList.styled';
import CarListItem from 'components/CarListItem/CarListItem';

const CarList = () => {
  return (
    <div>
      <StyledCarList>
        {CarBase.map(car => {
          const address = car.address.split(',');

          return (
            <StyledCarItem key={car.id}>
              <StyledCarImg src={car.img} alt={car.make} />
              <div>
                <h3>
                  {car.make}
                  {car.model ? car.model : null}, {car.year}
                </h3>
                <span>{car.rentalPrice}</span>
              </div>
              <div>
                <CarListItem car={car} address={address} />
              </div>
            </StyledCarItem>
          );
        })}
      </StyledCarList>
    </div>
  );
};

export default CarList;
