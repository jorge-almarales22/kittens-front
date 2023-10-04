import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setkittenById } from "../slices/kittens.slice";

export const Cat = ({ kitten }) => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(setkittenById(kitten));
        navigate(`/cat/${kitten.id}`);
    }

    return (
        <div className="card">
            <div className="card-header">
                <img src={`http://localhost:4000/images/${kitten.imageFileName}`} alt="Cat" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{kitten.name}</h5>
                <p className="card-text">{kitten.description}</p>
                <a onClick={handleClick} to={`/cat/${kitten.id}`} className="btn-go">I love it</a>
            </div>
        </div>
    )
}