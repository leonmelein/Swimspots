import './SearchResult.css'
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiAlert, mdiAlertOutline, mdiCloseOctagon } from '@mdi/js';

import AmenityList from './AmenityList'

import {
    useNavigate,
    useParams,
} from "react-router-dom";


function SearchResult({id, alternate_name, name, address, placename, current_status, e_coli, int_ent, description, amenities, lat, lon}) {
    let navigate = useNavigate();
    let params = useParams();
    console.log(navigate, params);

    let stateObj = {}
    if (id !== null) {
        stateObj = {
            'id': id,
            'alternate_name': alternate_name,
            'name': name,
            'address': address,
            'placename': placename,
            'current_status': current_status,
            'e_coli': e_coli,
            'int_ent': int_ent,
            'description': description,
            'amenities': amenities,
            'lat': lat,
            'lng': lon
        }
    } else {
        console.log("No data")
    }

    return (
        <>
            <div className="result-card">
                <Link to={'/location/'+ id} state={stateObj}>
                    <div className='result-card-header'>
                        <h3 className="result-title">{name} </h3>
                        <span className='status-icon'>{status(current_status)}</span>
                    </div>
                </Link>
                <p className="result-description">{placename}</p>
                <AmenityList amenities={amenities} />
            </div>
            <hr />
        </>
    )
}

SearchResult.propTypes = {
    id: PropTypes.any,
    alternate_name: PropTypes.string,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    placename: PropTypes.string.isRequired,
    description: PropTypes.string,
    current_status: PropTypes.string,
    e_coli: PropTypes.number,
    int_ent: PropTypes.number,
    amenities: PropTypes.array,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
}

function status(state) {
    if (state.includes("goed")) {
        return (
            <Icon path={mdiCheckCircle} size='1.5rem' color='#008551' />
        )
    } else if (state == "NADER_ONDERZOEK") {
        return (
            <Icon path={mdiAlertOutline} size='1.5rem' color='#FFBF00' />
        )
    } else if (state == "WAARSCHUWING") {
        return (
            <Icon path={mdiAlert} size='1.5rem' color='#FFBF00' />
        )
    } else {
        return (
            <Icon path={mdiCloseOctagon} size='1.5rem' color='#B81B0E' />
        )
    }
}

export default SearchResult;