import Logo from '../Logo/Logo';
import NavMain from '../NavMain/NavMain';

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center">
      <Logo />
      <NavMain />
    </header>
  );
};

export default Header;
