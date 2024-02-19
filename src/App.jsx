// added the css file
import './App.css'
// adding the components for changing pages
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import RegisterForm from './pages/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
