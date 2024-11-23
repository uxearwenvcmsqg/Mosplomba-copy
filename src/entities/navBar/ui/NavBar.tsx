import { Link } from 'react-router-dom';

function NavBar() {
  // const navBarList = [
  //   'о компании',
  //   'каталог',
  //   'прайс',
  //   'как купить',
  //   'оплата/гарантии',
  //   'доставка',
  //   'статьи',
  //   'сертификаты',
  //   'вопрос-ответ',
  //   'контакты',
  // ];
  const NavItem = [{ id: 1, title: 'about us', href: '/us', subtitles: ['1', '2,', '3'] }];

  return (
    <div>
      <ul>
        {NavItem.map((elem) => (
          <div>
            <Link to={`/${elem.href}`}>{elem.title}</Link>
            {/* {elem.subtitles &&
              {
                <Dropdown items?={elem.subtitles} />
              }} */}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;