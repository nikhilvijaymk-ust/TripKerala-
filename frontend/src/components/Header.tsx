import { useNavigate } from "react-router-dom";

export default function Header({logo, activeTab, setActiveTab}: {logo:any, activeTab: 'packages' | 'destination', setActiveTab: (tab: 'packages' | 'destination') => void}) {

    const navigate = useNavigate();
    
    return(
        <header className="home-header">
        <div className="brand">
           <img src={logo} alt="TripKerala Logo" className="brand-logo" />
          <span>TripKerala</span>
         
          <p>Explore packages and destinations</p>
        </div>
        <nav className="tab-list" aria-label="Home page tabs">
          <button
            className={activeTab === 'packages' ? 'tab active' : 'tab'}
            onClick={() => navigate('/packages')}
            type="button"
          >
            Packages
          </button>
          <button
            className={activeTab === 'destination' ? 'tab active' : 'tab'}
            onClick={() => navigate('destination')}
            type="button"
          >
            Destination
          </button>
        </nav>
      </header>
    )
}