import './SearchBar.css'
import Icon from '@mdi/react';
import { mdiCrosshairsGps, mdiMagnify } from '@mdi/js';
import PropTypes from 'prop-types';


function SearchBar({query, queryChange}) {
    
    return (
        <div className="searchbar">
            <div className='searchInput'>
                <button>
                    <div id="location">
                        <Icon path={mdiCrosshairsGps} size='1.5rem' />
                    </div>
                </button>
                <input className="text-3xl" id="searchbar" type="text" placeholder="Zoek op naam of plaats..." autoComplete="off" value={query} onChange={queryChange}/>
                <button>
                    <div id="search">
                        <Icon path={mdiMagnify} size='2rem' />
                    </div>
                </button>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    query: PropTypes.string,
    queryChange: PropTypes.func
}

export default SearchBar
