import emailLogo from "../../../../public/letter.png";
import timeLogo from "../../../../public/time.png";
import styles from "../ui/style.module.scss";

function Email() {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="ml-3 flex gap-3">
        <img className="w-[23px] h-[23px]" src={timeLogo} alt="" />
        <span className="uppercase text-[14px]">
          Пн-Чт с 9:30 до 18:00
          <br />
          Пятн. с 9:30 до 17:00
        </span>
      </div>
      <p className="text-[14px]">Москва, ул.Обручева, д. 34/63 стр.1</p>
      <div className="flex flex-row items-center">
        <div className="flex items-center gap-2">
          <img src={emailLogo} alt="" width={23} height={23} />
          <a href="" className={styles.link}>
            sales@mosplomba.ru
          </a>
        </div>
      </div>
    </div>
  );
}

export default Email;
