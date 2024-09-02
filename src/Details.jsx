import './App.css'
import './Details.css'
import AmenityList from './AmenityList'
import Header from './Header'

import Icon from '@mdi/react';
import { mdiBacteria, mdiPaperRoll } from '@mdi/js';
import { useLocation } from "react-router-dom";

function Details(){
    const { state } = useLocation();

    return (
        <>
           <Header />
            <div className="container details-container">
                <h2>{state.name}</h2>
                <p>Plaatsnaam</p>
                <AmenityList amenities={state.amenities} />
                <div>
                    <h3 className='test-result-header'>Testresultaten</h3>
                    <div className="test-result-container">
                        <div className="test-result">
                            <Icon path={mdiBacteria} size='1lh' color='#60B332' />
                            <p>E.Coli</p>
                            <p className="measurement">{state.e_coli}</p>
                        </div>
                        <div className="test-result">
                            <Icon path={mdiPaperRoll} size='1lh' color='grey' />
                            <p>Intestinale enterococcen</p>
                            <p className="measurement">{state.int_ent}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Beschrijving</h3>
                    <p>{state.description}</p>
                    <em>Bron: <a href='https://zwemwater.nl'>zwemwater.nl</a></em>
                </div>
            </div>
        </>
        
    )
}


export default Details;