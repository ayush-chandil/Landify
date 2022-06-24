import './App.css';
import Navbar from './components/Navbar';
import Content from "./components/Content";
import Feature from "./components/Features";
import Reviews from "./components/Reviews"; 
import Achievements from "./components/Achievements";
import Tools from "./components/Tools";
import Manage from "./components/Manage";

function App() {
  return (
    <>
     
      <Navbar/>
      <Content/>
      <Feature/>
      <Reviews/>
      <Achievements/>
      <Tools/>
      <Manage/>
    </>
  );
}

export default App;
