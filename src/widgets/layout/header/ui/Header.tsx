import { Contact } from '../../../../entities/contact/index';
import { Email } from '../../../../entities/email/index';
import { Search } from '../../../../features/search/index';
import cartLogo from '../../../../../public/cart.svg';
import whatsAppLogo from '../../../../../public/whatsAppLogo.svg';
// import { NavBar } from '../../../../entities/navBar/index';

function header() {
  return (
    <header className="flex flex-row justify-between m-20">
      <img src="https://mosplomba.ru/local/templates/main/img/logo-top.webp" alt="" width={320} />
      <Contact />
      <Email />
      <div>
        <Search />
        <div className='flex flex-row gap-5'>
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <button>Корзина</button>
          <img src={cartLogo} alt="cart-logo" />
          <p>0 тов. на сумму 0 руб.</p>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <a href="https://web.whatsapp.com/">WHATSAPP</a>
          <img src={whatsAppLogo} alt="" width={40} height={40} />
        </div>
      </div>
    </header>
  );
}

export default header;
