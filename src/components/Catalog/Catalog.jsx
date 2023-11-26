import React, { useEffect, useState } from 'react';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
import {
  Container,
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledOptions,
} from './Catalog.styled';
import { brandData, priceData } from './brands';
import CarList from 'components/CarList/CarList';
import { CarBase } from 'car-base';
import Select from 'react-select';

const Catalog = ({ getCarIdClicked }) => {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [carsFiltered, setCarsFiltered] = useState(CarBase);

  const handlePriceChange = selectedOption => {
    setPrice(selectedOption);
  };

  const handleBrandChange = selectedOption => {
    setBrand(selectedOption);
  };

  // useEffect(() => {
  //   console.log('Updated Price:', price);
  //   console.log('updated car', brand);
  //   console.log('updated cars', carsFiltered);
  // }, [price, brand, carsFiltered]);

  const handleFilter = () => {
    let filteredCars = CarBase;

    if (brand && brand.value === 'All') {
      setCarsFiltered(CarBase);
      return;
    }

    if (brand && brand !== 'All') {
      filteredCars = filteredCars.filter(car => car.make === brand.value);
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
    // console.log(filteredCars);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid transparent',
      borderRadius: '12px',
      width: '200px',
      height: '46px',
      backgroundColor: '#f1f3f6',

      '&:hover': {
        border: '1px solid #24485b', // Change border color on hover
      },

      '&:active': {
        outline: 'none', // Remove default focus outline
        border: '1px solid #24485b', // Change border color on focus
        boxShadow: '0 0 5px #24485b', // Optional: Add a box shadow for focus
      },
    }),
  };

  return (
    <Container>
      <StyledOptions>
        <div>
          <StyledLabel
            htmlFor="brand"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Car brand
          </StyledLabel>
          <Select
            value={brand}
            onChange={handleBrandChange}
            options={brandData.map(option => ({
              label: option,
              value: option,
            }))}
            placeholder="Select brand"
            styles={customStyles}
          />
        </div>

        <div>
          <StyledLabel
            htmlFor="price"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Price/1 hour
          </StyledLabel>
          <Select
            value={price}
            onChange={handlePriceChange}
            options={priceData.map(option => ({
              label: option.label,
              value: option.value,
            }))}
            placeholder="Select price"
            styles={customStyles}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <StyledLabel
            htmlFor="mileage"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Car mileage / km
          </StyledLabel>
          <div>
            <StyledInput
              type="text"
              value={minMileage}
              onChange={e => setMinMileage(e.target.value)}
            />
            <StyledInput
              type="text"
              value={maxMileage}
              onChange={e => setMaxMileage(e.target.value)}
              style={{
                borderRadius: '0px 12px 12px 0px',
                borderLeft: '1px solid #ccc',
              }}
            />
          </div>
        </div>

        <StyledButton
          onClick={handleFilter}
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Search
        </StyledButton>
      </StyledOptions>

      <CarList filtered={carsFiltered} getCarIdClicked={getCarIdClicked} />
      {/* <Autocomplete
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
        /> */}

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

      {/* <TextField
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
        /> */}

      {/* 
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
        /> */}
    </Container>
  );
};

export default Catalog;
