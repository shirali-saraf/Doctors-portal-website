
import './App.css';
import Home_page from './components/home/Home_page';
import Navbar from './components/navbar/Navbar';
import Login from './components/logIn/Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home_page/> */}
      <Login />
    </div>
  );
}

export default App;
