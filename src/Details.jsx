import './App.css'
import './Details.css'
import AmenityList from './AmenityList'
import Header from './Header'
import Map from './Map'

// import Icon from '@mdi/react';
// import { mdiArrowLeft, mdiArrowRight, mdiBacteria, mdiPaperRoll } from '@mdi/js';
import { useLocation } from "react-router-dom";

function Details(){
    const { state } = useLocation();

    return (
        <>
           <Header />
            <div className="details-container">
                <div className='location-headline'>
                    <div className='container'>
                            <nav>
                                {/* <p className='backBtn'>
                                    ← Terug
                                </p> */}
                            </nav>
                            <h2 className='location-name'>{state.name}</h2>
                            <AmenityList amenities={state.amenities} />
                    </div>
                </div>
                <div className='location-details container'>
                    <p>{state.description}</p>
                </div>
                <div className='location-tests container'>
                    <h3 className='test-result-header'>Waterkwaliteit</h3>
                    <div className="test-result-container">
                        <div className="test-result">
                            <p>Huidige kwaliteit</p>
                            <p className='measurement'>Goed</p>
                        </div>
                        <div className="test-result">
                            <p>Meerjarige kwaliteit</p>
                            <p className='measurement'>★★★</p>
                        </div>
                        <div className="test-result">
                            {/* <Icon path={mdiBacteria} size='1lh' color='#60B332' /> */}
                            <p>E.Coli</p>
                            <p className="measurement">{state.e_coli}</p>
                        </div>
                        <div className="test-result">
                            {/* <Icon path={mdiPaperRoll} size='1lh' color='grey' /> */}
                            <p>Enterococcen (IE)</p>
                            <p className="measurement">{state.int_ent}</p>
                        </div>
                        <span className='lastUpdated'>Laatste meting: 7 september 2024</span>

                    </div>
                </div>
                <div className='location-details container'>
                    <h3>Kaart</h3>
                    <Map lat={state.lat} lng={state.lng}/>
                </div>
            </div>
        </>
        
    )
}


export default Details;