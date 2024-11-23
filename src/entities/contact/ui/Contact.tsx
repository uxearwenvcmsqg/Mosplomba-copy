import phoneLogo from "../../../../public/phone.png";
import styles from "../ui/style.module.scss";

function Contact() {
  return (
    <div className="flex flex-col gap-2 border-r border-[#e8e5e5] px-4">
      <p className="text-center text-[27px]">
        +7 <span className="text-[#8f8e8e]">(495)</span> 698 60 64
      </p>
      <p className="text-center text-[27px]">
        +7 <span className="text-[#8f8e8e]">(800)</span> 333 20 41
      </p>
      <div className="flex flex-row justify-center gap-3">
        <div className="flex items-center gap-2">
          <img className="h-[23px] w-[23px]" src={phoneLogo} alt="" />
          <a href={phoneLogo} className={styles.link}>
            ПЕРЕЗВОНИТЕ МНЕ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
