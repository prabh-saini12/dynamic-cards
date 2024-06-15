import { LOGO_URL } from '../utils/constant';
const Header = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
