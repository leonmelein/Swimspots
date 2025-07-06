import './Item.css'
import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiCheck, mdiPlus } from '@mdi/js';
import { Link } from "react-router-dom";


function SearchResult({id, locationName, placename, current_status, addAction }) { 

    return (
        <>
            <div className="item">
                <div className='topRow'>
                    <div className='name'>
                        <h2 className="name">
                            <Link to={"/location/" + id} className='name'>{locationName}</Link>
                        </h2>
                        <p>{placename}</p>
                    </div>
                    <div className='status'>
                        {current_status}
                    </div>
                </div>
                <div className='tools'>
                    <AddButton id={id} addAction={addAction} />
                </div>
                
            </div>
        </>
        
    )
}

export default SearchResult

function AddButton({ id, addAction }) {
    const [icon, setIcon] = useState(mdiPlus)

    return (
        <>
            <button className="delete" onClick={(e) => {
                addAction(id, e);
                setIcon(mdiCheck);
            }}>
                <Icon path={icon} size={1} />
            </button>
        </>
    )
}
