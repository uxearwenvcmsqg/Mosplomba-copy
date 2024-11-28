import { Search } from "../../../features/search/index";
import styles from "../ui/style.module.scss";
import whatsAppLogo from "../../../../public/recall.png";

const Basket = () => {
  return (
    <div className="flex flex-col w-[100%] items-end">
      <Search />
      <div className="flex flex-col gap-4">
        <div className={styles.top}>
          <a href="/auth/" className={`${styles.top_enter}`}>
            Войти
          </a>
          <a href="/registration/" className={styles.top_reg}>
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
  );
};

export default Basket;
