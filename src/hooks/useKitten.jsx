import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useKitten = () => {
    let { id } = useParams();
    const [kitten, setKitten] = useState(null);

    const getKittenById = async() => {
        const resp = await fetch(`http://localhost:4000/kittens/${id}`)
        const data = await resp.json()
        setKitten(data)
    }

    useEffect(() => {
        getKittenById()
    }, []);

    return {
        kitten
    }
}