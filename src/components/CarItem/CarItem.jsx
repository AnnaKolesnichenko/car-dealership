import {
  AboutItemStyled,
  AboutStyled,
  AccessoriesItemStyled,
  AccessoriesListStyled,
  AiCrossStyled,
  BackdropStyled,
  ContainerStyled,
  DescripitonStyled,
  ImageStyled,
  ModalStyled,
  RentalCarBtn,
  RentalItemStyled,
  RentalListStyled,
  SubTitleStyled,
  TitleStyled,
} from './CartItem.styled';
import { CarBase } from 'car-base';

const CarItem = ({ id, handleCloseModal }) => {
  const car = CarBase.find(car => car.id === Number(id));
  const address = car.address.split(',');

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <BackdropStyled>
      <ModalStyled>
        <AiCrossStyled onClick={handleCloseModal} />
        <ContainerStyled key={id}>
          <ImageStyled src={car.img} alt={car.make} />
          <div>
            <div>
              <TitleStyled>
                {car.make}{' '}
                <span style={{ color: '#3470FF' }}>
                  {car.model ? car.model.slice(0, 11) : null}
                </span>
                , {car.year}
              </TitleStyled>
            </div>
            <div>
              <AboutStyled>
                <AboutItemStyled>{address[1]} |</AboutItemStyled>
                <AboutItemStyled>| {address[2]} |</AboutItemStyled>{' '}
                <AboutItemStyled> | Id: {car.id} | </AboutItemStyled>
                <AboutItemStyled> | Year: {car.year} | </AboutItemStyled>{' '}
                {/* <li>{car.}</li> */}
                <AboutItemStyled> | Type: {car.type}</AboutItemStyled>
              </AboutStyled>
            </div>
            <div>
              <AboutStyled>
                <AboutItemStyled>
                  Fuel Consumption: {car.fuelConsumption} |{' '}
                </AboutItemStyled>
                <AboutItemStyled>
                  {' '}
                  | Engine Size: {car.engineSize}
                </AboutItemStyled>
              </AboutStyled>
            </div>
            <DescripitonStyled>{car.description}</DescripitonStyled>
            <SubTitleStyled>Accessories and functionalities:</SubTitleStyled>

            <div>
              <AccessoriesListStyled>
                {car.accessories.map(item => (
                  <AccessoriesItemStyled> {item} || </AccessoriesItemStyled>
                ))}
              </AccessoriesListStyled>
            </div>
            <div>
              <AccessoriesListStyled>
                {car.functionalities.map(item => (
                  <AccessoriesItemStyled>{item} || </AccessoriesItemStyled>
                ))}
              </AccessoriesListStyled>
            </div>
            <SubTitleStyled>Rental Conditions:</SubTitleStyled>
            <div>
              <RentalListStyled>
                {car.rentalConditions.split('\n').map(condition => {
                  return <RentalItemStyled>{condition}</RentalItemStyled>;
                })}
                <RentalItemStyled>
                  Mileage:{' '}
                  <span style={{ color: '#3470FF' }}>{car.mileage}</span>
                </RentalItemStyled>
                <RentalItemStyled>
                  Price:{' '}
                  <span style={{ color: '#3470FF' }}>{car.rentalPrice}</span>
                </RentalItemStyled>
              </RentalListStyled>
            </div>
          </div>
          <div></div>
          <RentalCarBtn>Rental Car</RentalCarBtn>
        </ContainerStyled>
      </ModalStyled>
    </BackdropStyled>
  );
};

export default CarItem;
