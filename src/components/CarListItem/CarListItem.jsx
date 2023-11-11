const CarListItem = ({ car, address }) => {
  return (
    <ul>
      <li>{address[1]}</li>
      <li>{address[2]}</li>
      <li>{car.rentalCompany}</li>
      {/* <li>{car.}</li> */}
      <li>{car.type}</li>
      <li>{car.make}</li>
      <li>{car.mileage}</li>
      <li>{car.accessories[-1]}</li>
    </ul>
  );
};

export default CarListItem;
