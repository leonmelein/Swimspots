import PropTypes from "prop-types";
import SearchResult from "./SearchResult";
import './SearchBar.css'
import Icon from '@mdi/react';
import { mdiCrosshairsGps, mdiMagnify } from '@mdi/js';
import { createRef, useState } from "react";
import { geoSearch, textSearch } from "./search/search";
import Placeholder from "./Placeholder";


function SearchList({data}){
    const [locating, setLocating] = useState(false);
    const [searchResults, setSearchResults] = useState(data);
    const searchHandler = textSearch(data)
    let input = createRef("");

    function submit(){
        let query = input.current.value;

        if (query.length > 1){
            setSearchResults(
                searchHandler.search(input.current.value)
            );
        } else {
            setSearchResults([])
        }
    }

    function geolocate(){
        setLocating(true);
        setSearchResults([])
        navigator.geolocation.getCurrentPosition((position) => {
            var results = geoSearch(position.coords.latitude, position.coords.longitude, data)
            if (results.length >1){
                setSearchResults(
                    results
                )
            } else {
                setSearchResults([])
            }
            setLocating(false);
        });
    }

    return (
        <>
            <div className="searchbar">
                <div className='searchInput'>
                    <button onClick={geolocate} title="Zoek dichtbijzijnde zwemplekken" id="geoLocButton">
                        <div id="location">
                            <Icon path={mdiCrosshairsGps} size='1.5rem' />
                        </div>
                    </button>
                    <input className="text-3xl" id="searchbar" type="text" placeholder="Zoek op naam of plaats..." autoComplete="off" ref={input} onKeyUp={e => {if (e.key == "Enter") {submit()}}} />
                    <button onClick={submit} id="searchButton">
                        <div id="search" title="Zoek zwemplek">
                            <Icon path={mdiMagnify} size='2rem' />
                        </div>
                    </button>
                </div>
            </div>
            <div className='container results'>
                <Placeholder collapsed={(searchResults.length > 0 | locating == true) ? true : false} loading={locating}/>
                {searchResults.map(item => {
                    return <SearchResult key={crypto.randomUUID()} id={item.id} alternate_name={item.alternate_name} name={item.name} current_status={item.current_status} amenities={item.amenities} description={item.description} e_coli={item.e_coli} int_ent={item.int_ent} lat={item.lat} lon={item.lon}/>
                })}
            </div>
        </>
    )
}

SearchList.propTypes = {
    data: PropTypes.array
}

export default SearchList;