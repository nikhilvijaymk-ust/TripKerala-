import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/Tripkerala-logo-new.png'
// import Packages from './components/Packages'
// import Destination from './components/Destination'
import Headers from './components/Header'
import Menu from './components/Menu'
import getWeather from './services/weatherApi'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState<'packages' | 'destination'>('packages')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadWeather();
  }, []);

 const loadWeather = async () => {
    const data = await getWeather(
      9.9312,
      76.2673
    );

    setWeather(data);
  };

  return (
    <main className="home-page">

      <BrowserRouter>
      <Headers logo={logo} activeTab={activeTab} setActiveTab={setActiveTab}></Headers>
      
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setActiveTab={setActiveTab} />
        
        <Routes>
          <Route path="/" element={<Home activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/:tab" element={<Home activeTab={activeTab} setActiveTab={setActiveTab} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App
