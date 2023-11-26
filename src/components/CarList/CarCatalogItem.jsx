import { useState } from 'react';

import CarListItem from './CarListItem/CarListItem';
import {
  StyledCarItem,
  StyledCarImg,
  FiHeartStyled,
  StyledCarTitle,
  StyledCarname,
  StyledButton,
} from './CarList.styled';

const CarCatalogItem = ({ car, address, handleOpenModal, getCarIdClicked }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikedState = () => {
    setIsLiked(!isLiked);
  };
  return (
    <StyledCarItem key={car.id}>
      <div style={{ borderRadius: '14px', display: 'inline-block' }}>
        <StyledCarImg src={car.img} alt={car.make} />
        <FiHeartStyled
          onClick={() => {
            handleLikedState(car.id);
            getCarIdClicked(car.id);
          }}
          fillColor={isLiked ? 'red' : 'white'}
          strokeColor={isLiked ? 'red' : 'green'}
        />
      </div>
      <StyledCarTitle>
        <div>
          <StyledCarname>
            {car.make}{' '}
            <span style={{ color: '#3470FF' }}>
              {car.model ? car.model.slice(0, 11) : null}
            </span>
            , {car.year}
          </StyledCarname>
        </div>
        <div>
          <span style={{ margin: '0px' }}>{car.rentalPrice}</span>
        </div>
      </StyledCarTitle>
      <div>
        <CarListItem car={car} address={address} />
      </div>
      <StyledButton onClick={() => handleOpenModal(car.id)}>
        Learn More
      </StyledButton>
    </StyledCarItem>
  );
};

export default CarCatalogItem;
