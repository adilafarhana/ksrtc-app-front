import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './component/AddUser';
import Login from './component/Login';
import AddBus from './component/AddBus';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login'element={<Login/>}/>
      <Route path='/'element={<AddUser/>}/>
      
      <Route path='/addbus'element={<AddBus/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
