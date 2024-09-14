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
            <h2 className="tagline">Zoek een veilige zwemplek<br />in jouw buurt</h2>
            <br/>
            <p className="description">Gebaseerd op <a href="https://github.com/leonmelein/EUBathingWaterAPI" target="_blank">open data</a><br/> van zwemplekken in heel Europa</p>
        </div>
    )
}

Placeholder.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Placeholder;