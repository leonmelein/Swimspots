import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { fetchData } from './data/API';
import { deleteStoredLocation, getStoredLocations } from './data/LocalStorage';

import Item from './Item'
import './Favorites.css'

export function Favorites(){
    const [data, setData] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        console.log("Update favorite data");
        loadAllPlaces();
    }, [locations]);

    async function loadAllPlaces() {
        const locations = getStoredLocations();
        const results = await Promise.all(locations.map((id) => fetchData(id)))
            .then((result) => setData(result));
        return results;
    }

    function deleteItem(id, e) {
        console.log("Delete item")
        e.preventDefault();
        deleteStoredLocation(id, setLocations);
    }

    if (data.length > 0) {
            return (
                <>
                    <div id="favorites">
                        {data.map(item => {
                            if (item != undefined) {
                                return <Item key={item.id} id={item.id} locationName={item.name} placename={item.placename} current_status={item.current_status} delAction={deleteItem} refreshList={loadAllPlaces} />
                            }
                        })}
                    </div>
                    <div className='attribution'>
                        <p>Gebaseerd op <Link to={"/data"}>open data</Link> van zwemplekken in heel Europa</p>
                    </div>
                </>
            )
    } else {
        return (
            <Link to="/add">
                <h3>Voeg je eerste favoriet toe...</h3>
            </Link>
        )
    }
}


