import { Home } from '../pages/home/index';
import { Cart } from '../pages/cart/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='my-0 mx-auto'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
