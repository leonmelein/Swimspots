import './Item.css'
import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiBellOutline, mdiCheck, mdiClose, mdiPlus } from '@mdi/js';
import { Link } from "react-router-dom";


function Item({id, locationName, placename, current_status, search, delAction, refreshList}) { 

    return (
        <>
            <div className="item">
                <div className='topRow'>
                    <div className='name'>
                        <h2 className="name">
                            <Link to={"/location/" + id} className='name'>{locationName}</Link>
                        </h2>
                    </div>
                    <Status status={current_status}/>
                </div>
                <div className='bottomRow'>
                    <p>{placename}</p>
                    <div className='tools'>
                        <DeleteButton id={id} delAction={delAction} refreshList={refreshList} search={search} />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Item

function AddButton({ id, search, addAction }) {
    const [icon, setIcon] = useState(mdiPlus)

    if (!search) {
        return;
    }

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


function DeleteButton({id, search, delAction, refreshList}){

    if (search) {
        return;
    }

    return (
        <>
           <button className="delete" onClick={(e) => {
                delAction(id, e);
                refreshList();
            }}>
                <Icon path={mdiClose} size={1} />
            </button> 
        </>
    )
}

function AlertButton({id, search, alertAction, refreshList}){
    if (search) {
        return;
    }

    return (
        <>
           <button className="delete" onClick={(e) => {
                alertAction(id, e);
                refreshList();
            }}>
                <Icon path={mdiBellOutline} size={1} />
            </button> 
        </>
    )
}

function Status({status}){
    switch (status) {
        case "goed":
            return (
                <div className='status'>Goed</div>
            )

        case "NADER_ONDERZOEK": 
            return (
                <div className='status'>Waarschuwing</div>
            )

        case "NEGATIEF_ZWEMADVIES": 
            return (
                <div className='status'>Waarschuwing</div>
            )

        case "ZWEMVERBOD":
            return (
                <div className='status'>Zwemverbod</div>
            )
        default:
            break;
    }
}