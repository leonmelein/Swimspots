import SearchResult from './SearchResult'
import './SearchResults.css'

export function SearchResults({searchResults, addLocation}){
    if (searchResults === undefined || searchResults.length == 0) {
        return (
            <>
                <div className='placeholder'>
                    <em>Zoek op naam of plaats</em>
                </div>
            </>
        )
    }

    return (
        <div>
            <h2>Zoekresultaten</h2>
            <div>
                {searchResults.map(item => {
                    if (item != undefined) {
                        return <SearchResult key={item.id} id={item.id} locationName={item.name} placename={item.placename} current_status={item.current_status} addAction={() => addLocation(item.id)} />
                    }
                })}
            </div>
        </div>
    )
}