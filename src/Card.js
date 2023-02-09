import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf, faPoop, faBacteria, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Card.css';

export default function Card(){
    return (
        <div className='card'>
            <div className='header'>
                <div className='name'>
                    <h2>Sloterstrand <FontAwesomeIcon icon={faCheckCircle} color="green" /> </h2>
                </div>
                <p>Amsterdam, NL</p>    

            </div>
            
            <div className='measures'>
                <div className='measure'>
                    <FontAwesomeIcon icon={faTemperatureHalf} color="#4F9CC8"/>
                    <p>8.3°C</p>
                </div>
                <div className='measure'>
                    <FontAwesomeIcon icon={faPoop} color="darkbrown"/>
                    <p>OK</p>
                </div>
                <div className='measure'>
                    <FontAwesomeIcon icon={faBacteria} color="green"/>
                    <p>OK</p>
                </div>
            </div>
        </div>
    )
}