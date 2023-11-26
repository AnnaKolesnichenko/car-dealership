import { MdFreeCancellation } from 'react-icons/md';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { GiWallet } from 'react-icons/gi';
import { RiCarWashingFill } from 'react-icons/ri';
// import { BiMapPin } from 'react-icons/bi';
// import { FcShipped } from 'react-icons/fc';
import { MdAddLocationAlt } from 'react-icons/md';
import { SiAdguard } from 'react-icons/si';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { FaHandsHoldingChild } from 'react-icons/fa6';
import { IoCarSportSharp } from 'react-icons/io5';

import {
  Container,
  Specials,
  SpecialsItem,
  SpecialsTitle,
  SpecialsTitleWhite,
  StyledContainer,
  StyledDescrP,
  StyledDescrTitle,
  StyledDescription,
  StyledItem,
  StyledLink,
  StyledList,
  StyledSpecials,
  StyledTitle,
} from './Services.styled';

const styling = {
  width: '70px',
  height: 'auto',
  fill: 'white',
};

const Services = () => {
  return (
    <StyledContainer>
      <Container>
        <SpecialsTitle>Why Us:</SpecialsTitle>
        <StyledList>
          <StyledItem>
            <MdFreeCancellation
              style={{ width: '100px', height: '100px', fill: ' #24485b' }}
            />

            <div>
              <StyledTitle>Flexible rentals</StyledTitle>
              <StyledDescription>
                Cancel or change most bookings for free up to 48 hours before
                pick-up
              </StyledDescription>
            </div>
          </StyledItem>
          <StyledItem>
            <GiMagnifyingGlass
              style={{ width: '70px', height: '70px', fill: ' #24485b' }}
            />{' '}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <StyledTitle>No hidden fees</StyledTitle>
              <StyledDescription>
                Know exactly what you’re paying
              </StyledDescription>
            </div>
          </StyledItem>
          <StyledItem>
            <GiWallet
              style={{ width: '70px', height: '70px', fill: ' #24485b' }}
            />{' '}
            <div>
              <StyledTitle>Price Guarantee</StyledTitle>
              <StyledDescription>
                Found the same deal for less? We’ll match the price.
              </StyledDescription>
            </div>
          </StyledItem>
        </StyledList>
      </Container>

      <Specials>
        <Container>
          <SpecialsTitle
            style={{
              marginTop: '0px',
              color: 'white',
              borderBottom: '1px solid #7aafcc',
            }}
          >
            Special Services
          </SpecialsTitle>
          <StyledSpecials>
            <SpecialsItem>
              <StyledDescrTitle>
                <span style={{ color: '#7aafcc' }}>CASCO</span> insured cars
              </StyledDescrTitle>
              <SiAdguard style={styling} />
              <StyledDescrP style={{ marginBottom: '36px' }}>
                We travel with CASCO insurance, no additional fees are implied.
              </StyledDescrP>

              <StyledLink>Find out more</StyledLink>
            </SpecialsItem>

            <SpecialsItem>
              <StyledDescrTitle>
                <span style={{ color: '#7aafcc' }}>Wide</span> selection
              </StyledDescrTitle>
              <IoCarSportSharp style={styling} />
              <StyledDescrP>
                We provide a wide range of cars in every price category:
                economic, medium price segment, luxurious.{' '}
              </StyledDescrP>
              <StyledLink>Find out more</StyledLink>
            </SpecialsItem>

            <SpecialsItem>
              <StyledDescrTitle>
                <span style={{ color: '#7aafcc' }}>24/7</span> Support
              </StyledDescrTitle>
              <MdOutlineSupportAgent style={styling} />
              <StyledDescrP>
                We will suggest routes and beautiful places. We come, we help,
                if necessary, we change the car.
              </StyledDescrP>
              <StyledLink>Find out more</StyledLink>
            </SpecialsItem>

            <SpecialsItem>
              <StyledDescrTitle>
                <span style={{ color: '#7aafcc' }}>Security</span> for everyone
              </StyledDescrTitle>
              <FaHandsHoldingChild style={styling} />
              <StyledDescrP style={{ marginBottom: '34px' }}>
                Child seats and safety pillows are available for all car models
                and ages.
              </StyledDescrP>
              <StyledLink>Find out more</StyledLink>
            </SpecialsItem>

            <SpecialsItem>
              <StyledDescrTitle>
                <span style={{ color: '#7aafcc' }}>Car </span>washed
              </StyledDescrTitle>
              <RiCarWashingFill style={styling} />
              <StyledDescrP>
                Working with our partners to keep you safe, comfortable and in
                the driving seat. No smoking cars.
              </StyledDescrP>
              <StyledLink href="https://car-wash-4047.business.site/?m=true">
                Find out more
              </StyledLink>
            </SpecialsItem>

            <SpecialsItem>
              <StyledDescrTitle>
                <span style={{ color: '#7aafcc' }}>Convenient</span> delivery
              </StyledDescrTitle>
              <MdAddLocationAlt style={styling} />
              <StyledDescrP>
                We pick the car up from any locaiton you might need to leave it
                at. We deliver the car to your location on demand.
              </StyledDescrP>
              <StyledLink href="https://www.google.com/maps/preview">
                Find out more
              </StyledLink>
            </SpecialsItem>
          </StyledSpecials>
        </Container>
      </Specials>
    </StyledContainer>
  );
};

export default Services;
