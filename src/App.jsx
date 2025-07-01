import './App.css'
import { Details } from './Details';
import { Favorites } from './Favorites';
import { Header } from './Header';
import { Search } from './Search'
import {
    Routes,
    Route
} from "react-router-dom";
  

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Favorites />} />
                <Route path="add" element={<Search />} />
                <Route path="location/:id" element={<Details />} />
            </Routes>
        </>
    );
}
