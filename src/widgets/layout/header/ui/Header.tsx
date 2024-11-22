import { Contact } from '../../../../entities/contact/index';
import { Email } from '../../../../entities/email/index';

function header() {
  return (
    <header className="">
      <img src="https://mosplomba.ru/local/templates/main/img/logo-top.webp" alt="" />
      <Contact />
      <Email />
      <div>
        <div>
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
        <button>Корзина</button>
      </div>
    </header>
  );
}

export default header;
