import './index.scss'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './function/LanguageContext'; 
import PrivateRoute from './function/PrivateRoute';
import Nav from './components/Navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Register';
import Profile from './pages/Profile'; 
import NotFoundPage from './pages/NotFound';

function App() {


  return (
    <>
    <BrowserRouter>
    <LanguageProvider>
    <header>
      <Nav />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </main>
    </LanguageProvider>
    </BrowserRouter>
    </>

  )
}

export default App
