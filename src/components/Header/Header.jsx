import { useNavigate } from 'react-router-dom';
import logo from '../../images/rent.jpg';
import {
  StyledImage,
  StyledList,
  StyledListItem,
  StyledNav,
  StyledRegistration,
} from './Header.style';

const Header = () => {
  const navigation = useNavigate();
  const handleLogoClick = () => {
    navigation('/');
  };

  return (
    <StyledNav
      style={{
        maxWidth: '1184px',
        padding: '36px',
        paddingTop: '0px',
        paddingBottom: '0px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <StyledImage
        src={logo}
        alt="car dealership logotype"
        onClick={handleLogoClick}
      />
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
