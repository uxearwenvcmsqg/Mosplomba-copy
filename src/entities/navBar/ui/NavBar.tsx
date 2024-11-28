// import { Link } from 'react-router-dom';
import styles from "../ui/navbar.module.scss";

function NavBar() {
  const NavItem = [
    { id: 1, title: "о компании", href: "/us" },
    {
      id: 2,
      title: "каталог",
      href: "catalog",
      dubtitles: { id: 1, title: "Пластиковые пломбы" },
    },
    { id: 3, title: "прайс", href: "/price" },
    { id: 4, title: "как купить", href: "/howBuy" },
    { id: 5, title: "оплата/гарантии", href: "/payment" },
    { id: 6, title: "доставка", href: "/delivery" },
    { id: 7, title: "статьи", href: "/articles" },
    { id: 8, title: "сертификаты", href: "/sertificates" },
    { id: 9, title: "вопрос-ответ", href: "/questions" },
    { id: 10, title: "контакты", href: "/contacts" },
  ];

  return (
    <div className={`${styles.navbar}`}>
      <ul className={`${styles.navbar_nav}`}>
        {NavItem.map((elem, index) => (
          <li className={styles.navbar_nav_item}>
            <a key={index} href={elem.href}>
              {elem.title}
            </a>
          </li>
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
