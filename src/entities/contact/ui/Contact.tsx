import phoneLogo from '../../../../public/phone.svg';

function Contact() {
  return (
    <div>
      <p>+7 (495) 698 60 64</p>
      <p>9 (800) 333 20 41</p>
      <div className='flex flex-row items-center'>
        <img src={phoneLogo} alt="" />
        <a href={phoneLogo} className='text-red-400'>Перезвоните мне</a>
      </div>
    </div>
  );
}

export default Contact;
