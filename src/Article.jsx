import './Article.css';
import {
    Link
} from "react-router-dom";
import Icon from '@mdi/react';
import {mdiArrowLeft } from '@mdi/js';

export function Article(){
    return (
        <>
            <title>Open data | Swimspots</title>
            <div className='breadcrumb'>
                <Link to="/">
                    <Icon size={1} path={mdiArrowLeft}/>
                </Link>
            </div>
            <div className='content-grid'>
                <div className='card'>
                    <h2>Over ons</h2>
                    <p>Swimspots laat je zien waar je in Europa veilig kan zwemmen in open water.</p>
                </div>
                <div className='card'>
                    <h3>Open Data</h3>
                    <p><a href='https://github.com/leonmelein/EUBathingWaterAPI'>EU Bathing Water API</a> verzamelt data over alle gemonitorde zwemplekken in de open lucht in Europa. We transformeren de verschillende indelingen naar één schema. Swimspots laat zien hoe deze data inzichtelijk kan worden gemaakt.</p>
                </div>
            </div>
            </>
        )
}