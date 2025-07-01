import { useEffect, useState } from 'react';
import {Searchbar} from './Searchbar';
import {SearchResults} from './SearchResults'
import { addStoredLocation } from './data/LocalStorage';
import { Link } from "react-router-dom";
import { fetchList } from './data/API';
import { geoSearch } from './search/geoSearch'
import { textSearch } from './search/textSearch'
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import './Search.css'


export function Search() {
    const [data, setData] = useState([]);
    const [locating, setLocating] = useState(false);
    const [searchResults, setSearchResults] = useState(data);
    const searchHandler = textSearch(data);

    useEffect(() => {
        fetchList().then(result => setData(result))
    }, []);

    function submit(formData) {
        let query = formData.get("searchbar");

        if (query.length > 1) {
            setSearchResults(
                searchHandler.search(query)
            );
            setLocating(false);
        } else {
            setSearchResults([])
        }
    }

    function addLocation(id) {
        console.log(id)
        addStoredLocation(String(id));
    }

    function geolocate() {
        setLocating(true);
        setSearchResults([])
        navigator.geolocation.getCurrentPosition((position) => {
            var results = geoSearch(position.coords.latitude, position.coords.longitude, data)
            if (results.length > 1) {
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
            <title>Zoeken | Swimspots</title>
            <div className='breadcrumb'>
                <Link to="/">
                    <Icon size={0.5} path={mdiArrowLeft} /> Terug naar favorieten
                </Link>
            </div>
            <Searchbar searchAction={submit} geolocateAction={geolocate}/>
            <SearchResults searchResults={searchResults} addLocation={addLocation} />
        </>
    )
}
