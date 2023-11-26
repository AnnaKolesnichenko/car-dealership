import { useNavigate } from 'react-router-dom';
import logo from '../../images/rent.jpeg';
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
    <StyledNav>
      <StyledImage
        src={logo}
        alt="car dealership logotype"
        onClick={handleLogoClick}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'centern',
          alignItems: 'center',
          gap: '20px',
          marginTop: '4px',
        }}
      >
        <div>
          <StyledList>
            <StyledListItem to="/catalog">Catalog</StyledListItem>
            <StyledListItem to="/favorites">Favorites</StyledListItem>
          </StyledList>
        </div>
        {/* <div>
          <StyledRegistration>
            <StyledListItem>LogIn</StyledListItem>
            <StyledListItem>SignUp</StyledListItem>
          </StyledRegistration>
        </div> */}
      </div>
    </StyledNav>
  );
};

export default Header;
