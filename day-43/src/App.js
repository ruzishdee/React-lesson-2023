import About from './components/about';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/register';
import FeedBackForm from './components/feedBackForm';
import Home from './components/home';
import Test from './components/test';
import Khangai from './components/about/khangai';
import Usuhkuu from './components/about/Usuhkuu';
import NotFound from './components/notFound';

function App() {
  return (
    <div className="App">
      <h1> Day - 43 React Routes</h1>
      <br />
      <div id='navbar'>
        <a href="/home">Home</a>
        <a href="/about">about</a>
        <a href="/login">login</a>
        <a href="/register">register</a>
        <a href="/feedbackform">feedbackform</a>
      </div>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about/*' element={<About />} >
          <Route path='usuhkuu' element={<Usuhkuu />} />
          <Route path='khangai' element={<Khangai />} />
          <Route path='test' element={<Test />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/feedbackform' element={<FeedBackForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;