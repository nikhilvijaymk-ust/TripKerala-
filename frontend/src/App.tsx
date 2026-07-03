import { useState } from 'react'
import './App.css'
import logo from './assets/Tripkerala-logo-new.png'
import Packages from './components/Packages'
import Destination from './components/Destination'
import Headers from './components/Header'
import Menu from './components/Menu'

function App() {
  const [activeTab, setActiveTab] = useState<'packages' | 'destination'>('packages')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <main className="home-page">
      

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setActiveTab={setActiveTab} />

      <Headers logo={logo} activeTab={activeTab} setActiveTab={setActiveTab}></Headers>

      <section className="hero-section">
        <h1>Trending {activeTab == 'packages'? 'Packages' : 'Destinations'}</h1>
        {/* <p>
          Choose a tab to explore curated Kerala tour packages or discover
          top destinations across the state.
        </p> */}
      </section>

      <section className="content-section">
        {activeTab === 'packages' ? <Packages /> : <Destination />}
      </section>
    </main>
  )
}

export default App
