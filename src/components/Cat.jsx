import { Link } from "react-router-dom"

export const Cat = ({ kitten }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={`http://localhost:4000/images/${kitten.imageFileName}`} alt="Cat" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{kitten.name}</h5>
                <p className="card-text">{kitten.description}</p>
                <Link to={`/cat/${kitten.id}`} className="btn-go">Go somewhere</Link>
            </div>
        </div>
    )
}