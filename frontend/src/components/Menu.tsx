import { Link, useNavigate } from "react-router-dom"

export default function Menu({ menuOpen, setMenuOpen, setActiveTab }: { menuOpen: boolean, setMenuOpen: (value: boolean) => void, setActiveTab: (tab: 'packages' | 'destination') => void }) {

    const navigate = useNavigate();

    return (
        <>
            <button
                className={menuOpen ? 'hamburger open' : 'hamburger'}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
                type="button"
            >
                <span className="line" />
                <span className="line" />
                <span className="line" />
            </button>

            {menuOpen && (<div className="backdrop" onClick={() => setMenuOpen(false)} />)}

            <aside className={menuOpen ? 'sidebar open' : 'sidebar'} aria-hidden={!menuOpen}>
                <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
                <nav>
                    
                    <ul>
                        <li>
                            <button
                                type="button">
                            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</Link>
                            </button>
                        </li>
                        <li>
                            <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{textDecoration: 'none', color: 'inherit'}}>Contact</Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    navigate('/packages')
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
                                    navigate('/destination')
                                    setMenuOpen(false)
                                }}
                            >
                                Destination
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}