import { Link } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import './Header.css'

export function Header(){

    return (
        <header>
            <div className="title">
                <h1>
                    <Link to="/">🏊 Swimspots</Link>
                </h1>
            </div>
            <nav>
                <ul>
                    <Link to={"/add"}>
                        <Icon size={1} path={mdiMagnify} />
                    </Link>
                </ul>
            </nav>
        </header>
    )
}