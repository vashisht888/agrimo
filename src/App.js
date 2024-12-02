import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import FrontHeader from './component/webinclude/FrontHeader';
import FrontFooter from './component/webinclude/FrontFooter';
import About from './component/About';
import { BrowserRouter, Route, Routes,useLocation  } from 'react-router-dom';
import Products from './component/Products';
import MainHeader from './component/webinclude/MainHeader';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>

    <Header />
        
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
          </Routes>
        <FrontFooter/>
    </BrowserRouter>
    </div>
  );
}
function Header() {
  console.log(window.location.href+ "");
  const location1 = useLocation();
  
  // Conditionally render FrontHeader based on the current route
  if (location1.pathname === '/home' || window.location.href === 'http://localhost:3000/' ) {
    return <FrontHeader />; // Example: About header
  } else {
    return <MainHeader/>; // Default home page header
  }
}
export default App;
