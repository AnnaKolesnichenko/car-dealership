import logo from '../../images/rent.jpg';
import {
  StyledImage,
  StyledList,
  StyledListItem,
  StyledNav,
  StyledRegistration,
} from './Header.style';

const Header = () => {
  return (
    <StyledNav
      style={{
        maxWidth: '1024px',
        padding: '36px',
        paddingTop: '0px',
        paddingBottom: '0px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <StyledImage src={logo} alt="car dealership logotype" />
      <div>
        <StyledList>
          <StyledListItem to="/catalog">Catalog</StyledListItem>
          <StyledListItem>Favorites</StyledListItem>
        </StyledList>
      </div>
      <div>
        <StyledRegistration>
          <StyledListItem>Login</StyledListItem>
          <StyledListItem>SignUp</StyledListItem>
        </StyledRegistration>
      </div>
    </StyledNav>
  );
};

export default Header;
