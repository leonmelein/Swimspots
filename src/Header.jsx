import './Header.css'
import logo from './assets/logo.svg'

import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div id="header">
                <div className="title container">
                    <Link to={"/"} >
                        <img className="logo" src={logo} title='Zwemplek.nl'/>
                        <h1>Zwemplek</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Header
