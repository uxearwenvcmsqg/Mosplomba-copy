import { Contact } from '../../../../entities/contact/index';
import { Email } from '../../../../entities/email/index';
import { Search } from '../../../../features/search/index';
import cartLogo from '../../../../../public/cart.svg';
import whatsAppLogo from '../../../../../public/whatsAppLogo.svg';
// import { NavBar } from '../../../../entities/navBar/index';

function header() {
  return (
    <header className="flex flex-row justify-between">
      <img src="https://mosplomba.ru/local/templates/main/img/logo-top.webp" alt="" />
      <Contact />
      <Email />
      <div>
        <Search />
        <div>
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
        <button>Корзина</button>
        <img src={cartLogo} alt="cart-logo" />
        <p>0 тов. на сумму 0 руб.</p>
      </div>
      <a href="https://web.whatsapp.com/">WHATSAPP</a>
      <img src={whatsAppLogo} alt="" width={40} height={40} />
      {/* <NavBar/> */}
    </header>
  );
}

export default header;
