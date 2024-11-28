import { Contact } from "../../../../entities/contact/index";
import { Email } from "../../../../entities/email/index";
import { Basket } from "../../../../entities/basket";
import styles from "../ui/style.module.scss";
// import { NavBar } from '../../../../entities/navBar/index';

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

      <Basket />

      {/* <NavBar /> */}
    </header>
  );
}

export default header;
