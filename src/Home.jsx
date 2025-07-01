import { useEffect, useState } from "react";

import Header from './Header'
import SearchList from './SearchList'
import './App.css'

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                '/api/nl/locations.json',
            );
            const jsonData = await result.json();
            // Update state with the fetched data
            setData(jsonData);
        };

        fetchData();
    }, []);


  return (
    <>
      <Header />
      <SearchList data={data}/>
    </>
  )
}

export default Home
