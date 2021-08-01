import './App.css';
import Navbar from './components/navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Switch , Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyled';
import Home from './pages/homePages/Home';
import {Footer} from './components';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <GlobalStyle/>
    <Footer/>
    </>
  )
}

export default App;
