import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Blog from './pages/Blogs';
import BlogsPage from './pages/BlogsPage';
import BlogDetails from './pages/BlogDetails';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<BlogsPage></BlogsPage>}></Route>
          <Route path='/home' element={<BlogsPage></BlogsPage>}></Route>
          <Route path='/blogs/:blogId' element={<BlogDetails></BlogDetails>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
