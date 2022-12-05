import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/about/About";
import ButtonPage from "./pages/battonPage/ButtonPage";
import Menu from "./component/menu/Menu";
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route index element={<About/>}/>
          <Route path="/button" element={<ButtonPage/>}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/user" element={<UserPage/>}/>
          <Route path="/about-page" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;