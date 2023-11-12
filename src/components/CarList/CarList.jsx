import { CarBase } from 'car-base';
import {
  StyledCarImg,
  StyledCarItem,
  StyledCarList,
  StyledCarTitle,
  StyledCarname,
} from './CarList.styled';
import CarListItem from 'components/CarListItem/CarListItem';
import { LearnMoreBtn } from 'components/Buttons/Buttons';

const CarList = () => {
  return (
    <div>
      <StyledCarList>
        {CarBase.map(car => {
          const address = car.address.split(',');

          return (
            <StyledCarItem key={car.id}>
              <StyledCarImg src={car.img} alt={car.make} />
              <StyledCarTitle>
                <div>
                  <StyledCarname>
                    {car.make}{' '}
                    <span style={{ color: '#3470FF' }}>
                      {car.model ? car.model : null}
                    </span>
                    , {car.year}
                  </StyledCarname>
                </div>
                <div>
                  <span>{car.rentalPrice}</span>
                </div>
              </StyledCarTitle>
              <div>
                <CarListItem car={car} address={address} />
              </div>
              <LearnMoreBtn />
            </StyledCarItem>
          );
        })}
      </StyledCarList>
    </div>
  );
};

export default CarList;
