
function NavBar() {
  const NavItem = [
    { id: 1, title: 'о компании', href: '/us' },
    { id: 2, title: 'каталог', href: 'catalog', dubtitles: {id: 1, title: 'Пластиковые пломбы'} },
    { id: 3, title: 'прайс', href: '/price' },
    { id: 4, title: 'как купить', href: '/howBuy' },
    { id: 5, title: 'оплата/гарантии', href: '/payment' },
    { id: 6, title: 'доставка', href: '/delivery' },
    { id: 7, title: 'статьи', href: '/articles' },
    { id: 8, title: 'сертификаты', href: '/sertificates' },
    { id: 9, title: 'вопрос-ответ', href: '/questions' },
    { id: 10, title: 'контакты', href: '/contacts' },
  ];

  return (
    <div>
      <ul className='flex flex-row justify-between mx-80'>
        {NavItem.map((elem) => (
          <li><a href={elem.href}>{elem.title}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
// {/* <Link to={`/${elem.href}`}>{elem.title}</Link>
//             {/* {elem.subtitles &&
//               {
//                 <Dropdown items?={elem.subtitles} />
//               }} */}
//           </div> */}