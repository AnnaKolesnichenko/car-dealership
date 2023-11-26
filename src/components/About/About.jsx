import {
  Container,
  StyledHero,
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <img
            src="https://www.svgrepo.com//show/5196/sport-car.svg"
            alt="sport car"
            width="280px"
            stroke="white"
            style={{ marginRight: '90px' }}
          />
          <img
            src="https://www.svgrepo.com//show/5196/sport-car.svg"
            alt="sport car"
            width="280px"
            stroke="white"
            style={{ marginRight: '90px' }}
          />
          <img
            src="https://www.svgrepo.com//show/5196/sport-car.svg"
            alt="sport car"
            width="280px"
            stroke="white"
          />
        </div>
      </Container>
    </StyledHero>
  );
};

export default About;
