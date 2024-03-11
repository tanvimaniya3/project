import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AllRouter from './AllRouter';
import MainContent from './components/MainContent';

function App() {
  return (
   <>
    <Navbar/>
    <AllRouter/>
    <MainContent/>


   </>
  );
}

export default App;
