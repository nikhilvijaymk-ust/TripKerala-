export default function Menu({ menuOpen, setMenuOpen, setActiveTab }: { menuOpen: boolean, setMenuOpen: (value: boolean) => void, setActiveTab: (tab: 'packages' | 'destination') => void }) {

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
        </>
    )
}