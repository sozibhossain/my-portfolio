
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import ContactF from './Pages/ContactF/ContactF';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactf" element={<ContactF />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/projectDetails/:id" element={<ProjectDetails/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
