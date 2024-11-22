function NavBar() {
  const navBarList = [
    'о компании',
    'каталог',
    'прайс',
    'как купить',
    'оплата/гарантии',
    'доставка',
    'статьи',
    'сертификаты',
    'вопрос-ответ',
    'контакты',
  ];

  return (
    <div>
      <ul>
        {navBarList.map((elem, i) => (
          <li key={i}>{elem}</li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
