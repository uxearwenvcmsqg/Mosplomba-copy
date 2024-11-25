import { Home } from '../pages/home/index';
import { Cart } from '../pages/cart/index';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../features/auth/login/index';
import {SignUp} from '../features/auth/signup/index';


function App() {
  return (
    <div className='my-0 mx-auto'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
