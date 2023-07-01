import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import { LoginContextProvider } from './components/context/login-context';
import { ShopContextProvider } from './components/context/shop-context';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import ShopPage from './components/shop/ShopPage';

function App() {
  return (
    <LoginContextProvider>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </ShopContextProvider>
    </LoginContextProvider>
  );
}

export default App;
