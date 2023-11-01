
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home_page from './components/home/Home_page';
import Navbar from './components/navbar/Navbar';
import Doctors from './components/FindDoctors/Doctors';
import Login from './components/logIn/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home_page/>}/>
        <Route path='/findDoctors' element={<Doctors/>}/>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
