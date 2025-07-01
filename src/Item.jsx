import './Item.css'
import Icon from '@mdi/react';
import { mdiBellOutline, mdiClose, mdiPlus } from '@mdi/js';
import { Link } from "react-router-dom";


function Item({id, locationName, placename, current_status, search, addAction, delAction, refreshList}) { 

    return (
        <>
            <div className="item">
                <div className='topRow'>
                    <div className='name'>
                        <h2 className="name">
                            <Link to={"/location/" + id}>{locationName}</Link>
                        </h2>
                        <p>{placename}</p>
                    </div>
                    <div className='status'>
                        {current_status}
                    </div>
                </div>
                <div className='tools'>
                    <AlertButton id={id} alertAction={delAction} refreshList={refreshList} search={search} />
                    <DeleteButton id={id} delAction={delAction} refreshList={refreshList} search={search} />
                    <AddButton id={id} addAction={addAction} refreshList={refreshList} search={search} />
                </div>
                
            </div>
        </>
        
    )
}

export default Item

function AddButton({ id, search, addAction, refreshList }) {
    if (!search) {
        return;
    }

    return (
        <>
            <button className="delete" onClick={(e) => {
                addAction(id, e);
                refreshList();
            }}>
                <Icon path={mdiPlus} size={1} />
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