import './App.css'
import { Details } from './Details';
import { Favorites } from './Favorites';
import { Search } from './Search'
import { Article } from './Article'
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
                <Route path='data' element={<Article/>}/>
            </Routes>
        </>
    );
}
