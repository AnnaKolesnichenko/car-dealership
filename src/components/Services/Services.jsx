import { MdFreeCancellation } from 'react-icons/md';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { GiWallet } from 'react-icons/gi';
import { RiCarWashingFill } from 'react-icons/ri';
import { BiMapPin } from 'react-icons/bi';
import {
  Container,
  Specials,
  SpecialsItem,
  SpecialsTitle,
  StyledContainer,
  StyledDescrP,
  StyledDescrTitle,
  StyledDescription,
  StyledIcon,
  StyledItem,
  StyledLink,
  StyledList,
  StyledSpecials,
  StyledTitle,
} from './Services.styled';

const Services = () => {
  return (
    <StyledContainer>
      <Container>
        <SpecialsTitle>Our Advantages</SpecialsTitle>
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
          <SpecialsTitle style={{ marginTop: '0px', color: 'white' }}>
            Special Services
          </SpecialsTitle>
          <StyledSpecials>
            <SpecialsItem>
              <RiCarWashingFill
                style={{
                  width: '70px',
                  height: 'auto',

                  fill: 'white',
                }}
              />

              <StyledDescrTitle>
                <span style={{ color: '#7aafcc' }}>Clean cars.</span> Flexible
                bookings.
              </StyledDescrTitle>
              <StyledDescrP>
                Working with our partners to keep you safe and in the driving
                seat.
              </StyledDescrP>
              <StyledLink href="https://car-wash-4047.business.site/?m=true">
                Find out more
              </StyledLink>
            </SpecialsItem>
            <SpecialsItem>
              <BiMapPin
                style={{
                  width: '70px',
                  height: 'auto',

                  fill: 'white',
                }}
              />

              <StyledDescrTitle>
                Convenient{' '}
                <span style={{ color: '#7aafcc' }}>pick up and return</span>
              </StyledDescrTitle>
              <StyledDescrP>
                We pick the car up from any locaiton you might need to leave it
                at.
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
