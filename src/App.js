import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Blog from './components/Blog';
import Home from './components/Home';  
import BlogInfo from './components/BlogInfo';

function App() {
  return (
    <div>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogInfo />} />
      </Routes>
    </div>
  );
}

export default App;
