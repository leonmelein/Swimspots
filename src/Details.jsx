import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchData } from "./data/API";
import './Details.css';
import {
    Link
} from "react-router-dom";
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { AmenityList } from './AmenityList'
import { Warning } from "./Warning";

export function Details(){
    const [data, setData] = useState({});
    let { id } = useParams();

    useEffect(() => {
        console.log("Update favorite data");
        fetchData(id)
            .then((result) => {
                console.log(result)
                setData(result)
            });
        
    }, [id]);

    function generateStars(amount){
        console.log(amount);

        switch (Number(amount)) {
            case 1:
                return "★★★"            
            case 2:
                return "★★"
            case 3:
                return "★"
            case 4:
                return "—"
            default:
                return "niet beschikbaar"
        }
    }

    if (data === null) {
        return (
            <h3>Loading...</h3>
        )
    } else {
        return (
            <>
                <title>{data.name}</title>
                <div className='breadcrumb'>
                    <Link to="/">
                        <Icon size={0.5} path={mdiArrowLeft} /> Terug naar favorieten
                    </Link>
                </div>
                <div className="header">
                    <div className='topRow'>
                        <div className='name'>
                            <h2 className="name">
                                {data.name}
                            </h2>
                            <p>{data.address}</p>
                        </div>
                        <div className='status'>
                            {data.current_status}
                        </div>
                    </div>
                    <AmenityList amenities={data.amenities} />
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                </div>
                <Warning warnings={data.warnings} />
                <div className="quality">
                    <h3>Waterkwaliteit</h3>
                    <ul>
                        <li>Meerjarige kwaliteit: {generateStars(data.eu_designation)}</li>
                        <li>E.Coli: {data.e_coli} <abbr title="nanogram per deciliter">n/dl</abbr></li>
                        <li>Int. Enterococcen: {data.int_ent} <abbr title="nanogram per deciliter">n/dl</abbr></li>
                    </ul>
                    <em>Laatste update: {new Date().toDateString()}</em>
                </div>
            </>
        )
    }

    
}