import { Home } from '../pages/home/index';
import { Cart } from '../pages/cart/index';
import {SignUp} from '../features/auth/signup/index';
import {Login} from '../features/auth/login/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='my-0 mx-auto'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
