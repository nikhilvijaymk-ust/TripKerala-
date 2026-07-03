import Packages from "./Packages"
import Destination from "./Destination"
import { useParams } from "react-router-dom"

export default function Home({activeTab, setActiveTab}: {activeTab: 'packages' | 'destination', setActiveTab: (tab: 'packages' | 'destination') => void}) {

    const { tab } = useParams();

    if(tab){
        setActiveTab(tab as any);
    }

    return (
        <>
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
      </>
    )
}