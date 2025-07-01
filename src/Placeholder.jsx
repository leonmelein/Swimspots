import "./Placeholder.css"
import PropTypes from "prop-types"
import { ScaleLoader } from "react-spinners";

function Placeholder({collapsed, loading}){
    if (loading) {
        return (
            <div className="loader">
                <ScaleLoader color="#4A90E2" loading={loading} />
            </div>
        )
    }
    
    if (collapsed) {
        return null;
    }

    return (
        <div className="placeholder">
            <h2 className="tagline">Favorieten</h2>
            <SearchResult />
        </div>
    )
}

Placeholder.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Placeholder;