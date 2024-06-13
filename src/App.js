import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './component/AddUser';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddUser/>}/>
      <Route path='/login'element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
