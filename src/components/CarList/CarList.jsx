//import { CarBase } from 'car-base';
import {
  FiHeartStyled,
  StyledButton,
  StyledCarImg,
  StyledCarItem,
  StyledCarList,
  StyledCarTitle,
  StyledCarname,
} from './CarList.styled';
import CarListItem from 'components/CarList/CarListItem/CarListItem';
import { useState } from 'react';
import CarItem from 'components/CarItem/CarItem';
import CarCatalogItem from './CarCatalogItem';

const CarList = ({ filtered, getCarIdClicked }) => {
  const [isCarSelected, setIsCarSelected] = useState(false);

  const handleOpenModal = id => {
    setIsCarSelected(id);
  };

  const handleCloseModal = () => {
    setIsCarSelected(null);
  };

  return (
    <div>
      {isCarSelected && (
        <CarItem id={isCarSelected} handleCloseModal={handleCloseModal} />
      )}
      <StyledCarList>
        {filtered.map(car => {
          const address = car.address.split(',');

          return (
            <CarCatalogItem
              car={car}
              handleOpenModal={handleOpenModal}
              address={address}
              getCarIdClicked={getCarIdClicked}
            />
            // <StyledCarItem key={car.id}>
            //   <div style={{ borderRadius: '14px', display: 'inline-block' }}>
            //     <StyledCarImg src={car.img} alt={car.make} />
            //     <FiHeartStyled
            //       onClick={() => handleLikedState(car.id)}
            //       fillColor={isLiked ? 'red' : 'white'}
            //       strokeColor={isLiked ? 'red' : 'green'}
            //     />
            //   </div>
            //   <StyledCarTitle>
            //     <div>
            //       <StyledCarname>
            //         {car.make}{' '}
            //         <span style={{ color: '#3470FF' }}>
            //           {car.model ? car.model.slice(0, 11) : null}
            //         </span>
            //         , {car.year}
            //       </StyledCarname>
            //     </div>
            //     <div>
            //       <span style={{ margin: '0px' }}>{car.rentalPrice}</span>
            //     </div>
            //   </StyledCarTitle>
            //   <div>
            //     <CarListItem car={car} address={address} />
            //   </div>
            //   <StyledButton onClick={() => handleOpenModal(car.id)}>
            //     Learn More
            //   </StyledButton>
            // </StyledCarItem>
          );
        })}
      </StyledCarList>
    </div>
  );
};

export default CarList;
