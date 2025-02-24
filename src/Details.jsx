import './App.css'
import './Details.css'
import AmenityList from './AmenityList'
import Header from './Header'
import Map from './Map'

import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiAlert, mdiShare } from '@mdi/js';
import { useLocation } from "react-router-dom";

function Details(){
    const { state } = useLocation();
    const shareData = {
        title: state.name,
        text: state.description,
        url: "https://swimspots.eu/location/"+state.id,
    };

    async function share(){
        await navigator.share(shareData);
    }


    return (
        <>
           <Header />
            <div className="details-container">
                <div className="location-headline">
                    <div className='container'>
                            <h2 className='location-name'>{state.name}</h2>
                            <p>{state.placename}</p>
                            <AmenityList amenities={state.amenities} />
                    </div>
                </div>
                <div className='location-details container'>
                    <p>{state.description}</p>
                </div>
                {/* <div className='location-warning'>
                    <Icon path={mdiAlert} size='1.2rem' color='black' />
                    <h3>Negatief zwemadvies</h3>
                    <p>Zwemmen ontraden vanwege blauwalgen. Grote kans op huidirritatie en maag-/darmklachten.</p>
                </div> */}
                <div className='location-tests container'>
                    <h3 className='test-result-header'>Waterkwaliteit</h3>
                    <div className="test-result-container">
                        <div className="test-result">
                            <p>Huidige kwaliteit</p>
                            {/* <p className={status(state.current_status)}>{state.current_status}</p> */}
                            <Status state={state.current_status} />
                        </div>
                        <div className="test-result">
                            <p>Meerjarige kwaliteit</p>
                            <p className='measurement star-rating'>★★★</p>
                        </div>
                        <div className="test-result">
                            {/* <Icon path={mdiBacteria} size='1lh' color='#60B332' /> */}
                            <p>E.Coli</p>
                            <EColi amount={state.e_coli} />
                        </div>
                        <div className="test-result">
                            {/* <Icon path={mdiPaperRoll} size='1lh' color='grey' /> */}
                            <p>Enterococcen (IE)</p>
                            <IntEnt amount={state.int_ent} />
                        </div>
                        <span className='lastUpdated'>Laatste meting: 7 september 2024</span>

                    </div>
                </div>
                
                <div className='location-details container'>
                    <h3>Locatie</h3>
                    {/* <Map lat={state.lat} lng={state.lng}/> */}
                    <p>{state.address}</p>
                    <button className='share'>
                        <div className="share" onClick={share}>
                            <Icon path={mdiShare} size='2rem' />
                            <p>Deel deze locatie</p>
                        </div>
                    </button>
                </div>
            </div>
        </>
        
    )
}

function Status({ state }) {
    if (state.trim().length === 0) {
        return (<p className='measurement'>
            Onbekend
        </p>)
    }
    
    if (state.includes("goed")) {
        return (
            <p className="measurement quality-good">Goed</p>
        )
    } else if (state == "NADER_ONDERZOEK") {
        return (
            <p className="measurement quality-warning">Nader onderzoek</p>
        )
    } else if (state == "WAARSCHUWING") {
        return (
            <p className="measurement quality-warning">Waarschuwing</p>
        )
    } else {
        return (
            <p className="measurement quality-bad">Zwemverbod</p>
        )
    }
}

function IntEnt({ amount }) {
    if (amount < 200) {
        return (<p className="measurement quality-good">{amount}</p>)
    }

    if (amount > 330) {
        return (<p className="measurement quality-warning">{amount}</p>)
    }

    return (<p className="measurement">{amount}</p>)
}

function EColi({amount}){
    if (amount < 200){
        return (<p className="measurement quality-good">{amount}</p>)
    }

    if (amount > 900){
        return (<p className="measurement quality-warning">{amount}</p>)
    }

    return (<p className="measurement">{amount}</p>)
}

IntEnt.propTypes = {
    amount: PropTypes.number
}

EColi.propTypes = {
    amount: PropTypes.number
}

Status.propTypes = {
    state: PropTypes.string
}


export default Details;