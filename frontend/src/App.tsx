import { useState } from 'react'
import './App.css'
import logo from './assets/Tripkerala-logo-new.png'
import Packages from './components/Packages'
import Destination from './components/Destination'

function App() {
  const [activeTab, setActiveTab] = useState<'packages' | 'destination'>('packages')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <main className="home-page">
      <button
        className={menuOpen ? 'hamburger open' : 'hamburger'}
        onClick={() => setMenuOpen((s) => !s)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
        type="button"
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>

      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)} />}

      <aside className={menuOpen ? 'sidebar open' : 'sidebar'} aria-hidden={!menuOpen}>
        <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
        <nav>
          <ul>
            <li>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('packages')
                  setMenuOpen(false)
                }}
              >
                Packages
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('destination')
                  setMenuOpen(false)
                }}
              >
                Destination
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setMenuOpen(false)}>About</button>
            </li>
          </ul>
        </nav>
      </aside>
      <header className="home-header">
        <div className="brand">
           <img src={logo} alt="TripKerala Logo" className="brand-logo" />
          <span>TripKerala</span>
         
          <p>Explore packages and destinations</p>
        </div>
        <nav className="tab-list" aria-label="Home page tabs">
          <button
            className={activeTab === 'packages' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('packages')}
            type="button"
          >
            Packages
          </button>
          <button
            className={activeTab === 'destination' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('destination')}
            type="button"
          >
            Destination
          </button>
        </nav>
      </header>

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
