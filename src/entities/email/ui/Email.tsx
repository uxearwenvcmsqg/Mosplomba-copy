import emailLogo from '../../../../public/email.svg';

function Email() {
  return (
    <div>
      <span>
        Пн-Чт с 9:30 до 18:00
        <br />
        Пятн. с 9:30 до 17:00
      </span>
      <p>Москва, ул.Обручева, д. 34/63 стр.1</p>
      <div className='flex flex-row items-center'>
        <a href="" className='text-red-400'>sales@mosplomba.ru</a>
        <img src={emailLogo} alt="" width={40} height={40} />
      </div>
    </div>
  );
}

export default Email;
