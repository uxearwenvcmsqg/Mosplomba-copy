import phoneLogo from '../../../../public/phone.svg';

function Contact() {
  return (
    <div>
      <p>+7 (495) 698 60 64</p>
      <p>9 (800) 333 20 41</p>
			<img src={phoneLogo} alt="" />
      <a href="">Перезвоните мне</a>
    </div>
  );
}

export default Contact;
