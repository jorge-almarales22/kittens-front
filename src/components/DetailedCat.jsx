import { Link } from "react-router-dom"

export const DetailedCat = ({ kitten }) => {
    return (
        <div className="card detailed-card">
            <div className="card-header header-detailed">
                <img src={kitten.photo} alt="Cat" />
            </div>
            <div className="card-body body-detailed">
                <h5 className="card-title title-detailed">{kitten.name}</h5>
                <p className="card-text bold"><span>Age:</span> {kitten.age}</p>
                <p className="card-text bold"><span>Breed:</span> {kitten.breed}</p>
                <p className="card-text bold"><span>High:</span> {kitten.high}</p>
                <p className="card-text bold"><span>Weight:</span> {kitten.weight}</p>
                <p className="card-text bold">{kitten.description}</p>
                <Link to={`/`} className="btn-go">Back</Link>
            </div>
        </div>
    )
}