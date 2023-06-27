import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import Home from './components/home/Home';
import RegisterForm from './components/forms/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;
