import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, StyledOptions } from './Catalog.styled';
import { brandData, priceData } from './brands';
import CarList from 'components/CarList/CarList';
import { CarBase } from 'car-base';
import Select from 'react-select';

function Catalog() {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [carsFiltered, setCarsFiltered] = useState(CarBase);

  const handlePriceChange = selectedOption => {
    setPrice(selectedOption);
  };

  useEffect(() => {
    console.log('Updated Price:', price);
  }, [price]);

  const handleFilter = () => {
    let filteredCars = CarBase;

    if (brand === 'All' || brand === '') {
      setCarsFiltered(CarBase);
    }

    if (brand && brand !== 'All') {
      filteredCars = filteredCars.filter(car => car.make === brand);
    }

    if (price) {
      filteredCars = filteredCars.filter(car => {
        const rentalPrice = Number(car.rentalPrice.replace('$', ''));
        return rentalPrice === price.value;
      });
    }

    if (minMileage !== '' && maxMileage !== '') {
      filteredCars = filteredCars.filter(
        car => car.mileage >= minMileage && car.mileage <= maxMileage
      );
    }

    setCarsFiltered(filteredCars);
    console.log(filteredCars);
  };

  return (
    <Container>
      <StyledOptions>
        <Autocomplete
          value={brand}
          onChange={(event, newValue) => {
            setBrand(newValue);
          }}
          options={brandData.map(car => car)}
          renderInput={params => (
            <TextField
              {...params}
              label="Car brand"
              variant="outlined"
              sx={{
                width: '224px',
                paddingBottom: '4px',
                paddingTop: '2px',
                border: 'none',
                fontFamily: 'Manrope, sans-serif',
              }}
            />
          )}
        />
        <Select
          value={price}
          onChange={handlePriceChange}
          options={priceData.map(option => ({
            label: option.label,
            value: option.value,
          }))}
          placeholder="Select price"
        />
        {/* <Autocomplete
          value={price}
          onChange={newValue => {
            setPrice(newValue);
          }}
          options={priceData.map(price => String(price.value))}
          getOptionLabel={option => String(option)}
          renderInput={params => (
            <TextField
              {...params}
              label="Price/ 1 hour"
              variant="outlined"
              sx={{
                width: '135px',
                paddingBottom: '4px',
                paddingTop: '2px',
                border: 'none',
                fontFamily: 'Manrope, sans-serif',
              }}
              // value={price}
              // onChange={e => setPrice(e.target.value)}
            />
          )}
        /> */}

        <TextField
          label="From"
          variant="outlined"
          value={minMileage}
          onChange={e => setMinMileage(e.target.value)}
          sx={{
            width: '135px',
            paddingBottom: '4px',
            paddingTop: '2px',
            border: 'none',
            fontFamily: 'Manrope, sans-serif',
          }}
        />
        <TextField
          label="To"
          variant="outlined"
          value={maxMileage}
          onChange={e => setMaxMileage(e.target.value)}
          sx={{
            width: '160px',
            paddingBottom: '4px',
            paddingTop: '2px',
            border: 'none',
            fontSize: '24px',
            fontFamily: 'Manrope, sans-serif',
          }}
        />

        <Button
          variant="contained"
          onClick={handleFilter}
          sx={{
            width: '160px',
            height: '56px',
            fontSize: '20px',
            fontFamily: 'Manrope, sans-serif',
            textTransform: 'capitalize',
            backgroundColor: '#3470FF',
            border: 'none',
            paddingY: '12px',
            paddingX: '99px',
            borderRadius: '12px',
          }}
        >
          Search
        </Button>
      </StyledOptions>

      <CarList filtered={carsFiltered} />
    </Container>
  );
}

export default Catalog;
