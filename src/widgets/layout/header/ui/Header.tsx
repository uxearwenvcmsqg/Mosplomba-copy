import { Contact } from '../../../../entities/contact/index';
import { Email } from '../../../../entities/email/index';
import { Search } from '../../../../features/search/index';
import cartLogo from '../../../../../public/cart.svg';
import whatsAppLogo from '../../../../../public/whatsAppLogo.svg';
// import { NavBar } from '../../../../entities/navBar/index';
import styles from './style.module.scss';

function header() {
  return (
    <header className="flex w-[100%] py-[2%] px-[3%] justify-between items-center">
      <div className={styles.divider}>
        <img
          src="https://mosplomba.ru/local/templates/main/img/logo-top.webp"
          alt=""
          className="w-[320px] h-[76px]"
        />
      </div>

      <div className={styles.divider}>
        <Contact />
      </div>
      <div className={styles.divider}>
        <Email />
      </div>

      <div className="flex flex-col w-[100%] items-end">
        <Search />
        <div className="flex flex-row gap-5">
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <button>Корзина</button>
          <img src={cartLogo} alt="cart-logo" />
          <p>0 тов. на сумму 0 руб.</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <a href="https://web.whatsapp.com/">WHATSAPP</a>
          <img src={whatsAppLogo} alt="" width={40} height={40} />
        </div>
      </div>
      {/* <NavBar /> */}
    </header>
  );
}

export default header;
