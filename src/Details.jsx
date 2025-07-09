import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchData } from "./data/API";
import './Details.css';
import {
    Link
} from "react-router-dom";
import Icon from '@mdi/react';
import {mdiArrowLeft, mdiShare } from '@mdi/js';
import { AmenityList } from './AmenityList'
import { Warning } from "./Warning";
import { statusBadge } from "./StatusBadge";

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

    const shareData = {
        title: data.name,
        text: data.description,
        url: "https://swimspots.eu/location/" + data.id,
    };

    async function share() {
        await navigator.share(shareData);
    }

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
                        <Icon size={1} path={mdiArrowLeft}/>
                    </Link>
                    <a href="#" className="share" onClick={share}>
                        <Icon size={1} path={mdiShare} />
                    </a>
                </div>
                <div className="header">
                    <div className='name'>
                        <h2 className="name">
                            {data.name}
                        </h2>
                        <p>{data.address}</p>
                    </div>
                    <div className='status'>
                        {statusBadge(data.current_status)}
                    </div>
                </div>
                <Warning warnings={data.warnings} />

                <div className="quality">
                    <div className="quality-item card">
                        <h3>E.Coli</h3>
                        <p className="number">{data.e_coli} <abbr title="nanogram per deciliter">n/dl</abbr></p>
                    </div>

                    <div className="quality-item card">
                        <h3>Enterococci</h3>
                        <p className="number">{data.int_ent} <abbr title="nanogram per deciliter">n/dl</abbr></p>
                    </div>

                    <div className="quality-item card">
                        <h3>Meerjarige kwaliteit</h3>
                        <p className="number">{generateStars(data.eu_designation)}</p>
                    </div>
                </div>

                <div className="card description">
                    <h3>Over deze plek</h3>
                    <p>{data.description}</p>
                    
                    <AmenityList amenities={data.amenities} />
                </div>

            </>
        )
    }

    
}