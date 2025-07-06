import './App.css'
import { Details } from './Details';
import { Favorites } from './Favorites';
import { Search } from './Search'
import {
    Routes,
    Route
} from "react-router-dom";
  

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Favorites />} />
                <Route path="add" element={<Search />} />
                <Route path="location/:id" element={<Details />} />
            </Routes>
        </>
    );
}
