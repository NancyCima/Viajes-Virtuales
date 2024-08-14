import './CityItem.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CityItem = ({ id, titulo, descripcion, imagen, details }) => {
    return (
        <section className="card-section">
            <h2 className="card-title">{titulo}</h2>
            <p className="card-description">{descripcion}</p>
            <picture>
                <img className="card-img" src={imagen} alt={titulo} />
            </picture>
            <Link to={`/details/${id}`}>
                <button className="ver-mas-btn">
                    Ver más
                </button>
            </Link>
        </section>
    )
}

CityItem.propTypes = {
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
    imagen: PropTypes.string,
    details: PropTypes.string
}

export default CityItem