import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export const useKitten = () => {
    let { id } = useParams();
    const [kitten, setKitten] = useState(null);

    const getKittenById = async() => {
        try {
            
            const resp = await fetch(`http://localhost:4000/kittens/${id}`)
            const data = await resp.json()
            setKitten(data)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getKittenById()
    }, []);

    return {
        kitten
    }
}