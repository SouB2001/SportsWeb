//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Branding from './Components/Branding';
import About from './Components/About';
import Body from './Components/Body';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Blogs from './Components/Blogs';
import Investor from './Components/Investor';
import Prelaunch from './Components/Prelaunch';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<> <Branding /> <About /> <Body /> <Team /> <Contact /> </>} />
          <Route exact path='/Blogs.js' element={ <Blogs /> } />
          <Route exact path='/Investor.js' element={ <Investor /> } />
          <Route exact path='/Prelaunch.js' element={ <Prelaunch /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
