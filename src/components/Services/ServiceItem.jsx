import {
  SpecialsItem,
  StyledDescrTitle,
  StyledDescrP,
  StyledLink,
} from './Services.styled';

const ServiceItem = ({ title, span, description, Icon }) => {
  return (
    <SpecialsItem>
      <StyledDescrTitle>
        <span style={{ color: '#7aafcc' }}>{span}</span> {title}
      </StyledDescrTitle>

      <StyledDescrP>{description}</StyledDescrP>
      <StyledLink href="https://www.google.com/maps/preview">
        Find out more
      </StyledLink>
    </SpecialsItem>
  );
};

export default ServiceItem;
