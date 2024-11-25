import { Contact } from "../../../../entities/contact/index";
import { Email } from "../../../../entities/email/index";
import { Search } from "../../../../features/search/index";
import whatsAppLogo from "../../../../../public/recall.png";
import styles from "../ui/style.module.scss";

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
        <div className="flex flex-col gap-4">
          <div className={styles.top}>
            <a href="/Login" className={`${styles.top_enter}`}>
              Войти
            </a>
            <a href="/SignUp" className={styles.top_reg}>
              Регистрация
            </a>
          </div>
          <div className={styles.top_basket}>
            <a href="/personal/cart/" className={styles.top_basket_main}>
              Корзина
            </a>
            <span className={styles.top_basket_desc}>
              <a href="/personal/cart/">0 тов. на сумму 0 руб. </a>
            </span>
          </div>
          <div className="flex flex-row justify-end items-center gap-2">
            <img src={whatsAppLogo} alt="" width={23} height={23} />
            <a href="https://web.whatsapp.com/" className={styles.link}>
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;