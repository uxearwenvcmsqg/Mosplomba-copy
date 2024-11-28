import { Home } from '../pages/home/index';
import { Cart } from '../pages/cart/index';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../features/auth/login/index';
import {SignUp} from '../features/auth/signup/index';
import {Articles} from '../pages/NavBarPages/index';
import {Catalog} from '../pages/NavBarPages/index';
import {Contacts} from '../pages/NavBarPages/index';
import {Delivery} from '../pages/NavBarPages/index';
import {HowBuy} from '../pages/NavBarPages/index';
import {Payment} from '../pages/NavBarPages/index';
import {Price} from '../pages/NavBarPages/index';
import {Questions} from '../pages/NavBarPages/index';
import {Sertificates} from '../pages/NavBarPages/index';
import {Us} from '../pages/NavBarPages/index';

function App() {
  return (
    <div className='my-0 mx-auto'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/us" element={<Us/>} />
        <Route path="/sertificates" element={<Sertificates />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/price" element={<Price />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/howBuy" element={<HowBuy />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
