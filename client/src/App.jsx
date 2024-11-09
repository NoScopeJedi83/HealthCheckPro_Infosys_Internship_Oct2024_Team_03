import './App.css'
import Navbar2 from './components/Navbar2';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection'
import ArticleSection from './components/ArticleSection'
import InputSection from './components/InputSection'
import QuoteSection from './components/QuoteSection'


import Articles from './components/ArticleSection';
import Assessment from './pages/AssessmentPage';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
    <Navbar2/>
    <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    <HeroSection/>
    <InputSection/>
    <QuoteSection/>
    <ArticleSection/>
  

    
    </>
  )
}

export default App
