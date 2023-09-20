import mainMenu from '../../lib/mockData/MainMain.json';
import Link from 'next/link';
import ChangeColor from '../ChangeColor/ChangeColor';

const NavMain = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-4">
        {mainMenu.map((menu, index) => (
          <li key={index}>
            <Link
              href={menu.src}
              className="hover:text-amber-700	hover:font-bold"
            >
              {menu.title}
            </Link>
          </li>
        ))}
        <li>
          <ChangeColor />
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
