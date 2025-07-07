import './SearchBar.css';
import Icon from '@mdi/react';
import { mdiMagnify, mdiCrosshairsGps } from '@mdi/js';


export default function Searchbar({searchAction}){
    return (
        <>
            <div>
                    <div className="searchbar">
                        <div className='searchInput'>
                        <form id="addId" action={(e) => searchAction(e)}>
                            <button title="Zoek dichtbijzijnde zwemplekken" id="geoLocButton">
                                <div id="location">
                                    <Icon size={1} path={mdiCrosshairsGps} />
                                </div>
                            </button>
                            <input className="text-3xl" id="searchbar" name="searchbar" type="text" placeholder="Zoek op naam of plaats..." autoComplete="off" />
                            <button id='searchButton' type='submit'>
                                <div id="search">
                                    <Icon size={1} path={mdiMagnify}/>
                                </div>
                            </button>
                            </form>
                        </div>
                    </div>
            </div>
        </>
    )
}
