import { Link } from "react-router-dom"
import { useKittenHook } from "../hooks/useKittenHook"

export const DetailedCat = ({ kitten }) => {

    const { urlImages } = useKittenHook()
    return (
        <div className="card detailed-card">
            <div className="card-header header-detailed">
                <img src={`${urlImages}/${kitten.imageFileName}`} alt="Cat" />
            </div>
            <div className="card-body body-detailed">
                <h5 className="card-title title-detailed">{kitten.name}</h5>
                <p className="card-text bold"><span>Gender:</span> {kitten.gender}</p>
                <p className="card-text bold"><span>Age:</span> {kitten.age}</p>
                <p className="card-text bold">{kitten.description}</p>
                <Link to={`/`} className="btn-go">Back</Link>
            </div>
        </div>
    )
}