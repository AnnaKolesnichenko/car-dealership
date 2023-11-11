import {
  Container,
  StyledHero,
  StyledImage,
  StyledService,
  StyledServices,
  StyledTitle,
} from './About.styled';

const About = () => {
  return (
    <StyledHero>
      {' '}
      <Container>
        <StyledServices>
          <StyledService>
            Free <span style={{ color: '#7aafcc' }}>cancellation</span> of most
            bookings
          </StyledService>
          <StyledService>
            <span style={{ color: '#7aafcc' }}>10000+</span> locations
          </StyledService>
          <StyledService>
            Customer <span style={{ color: '#7aafcc' }}>support</span> 24/7
          </StyledService>
        </StyledServices>
        <StyledTitle>
          Rent <span style={{ color: '#7aafcc' }}>THE</span> Car
        </StyledTitle>
        <div style={{ display: 'flex', gap: '90px' }}>
          <img
            src="https://www.svgrepo.com//show/5196/sport-car.svg"
            alt="sport car"
            width="200px"
            stroke="white"
          />
          <img
            src="https://www.svgrepo.com//show/5196/sport-car.svg"
            alt="sport car"
            width="200px"
            stroke="white"
          />
          <img
            src="https://www.svgrepo.com//show/5196/sport-car.svg"
            alt="sport car"
            width="200px"
            stroke="white"
          />
          <img src="" alt="" />
        </div>
      </Container>
    </StyledHero>
  );
};

export default About;
