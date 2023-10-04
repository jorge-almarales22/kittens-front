import { setkittens } from "../slices/kittens.slice"

function getEnv() {
    const url = window.location.href;
    return url.includes("localhost") ? "development" : "production";
}

export const setkittensThunk = (num) => {
    return async(dispatch, getState) => {
        
        const env = getEnv()
        const url = env === "development" ? "http://localhost:4000/kittens" : "https://kittens-back-production.up.railway.app/kittens"
        const resp = await fetch(url)
        const data = await resp.json()
        
        dispatch(setkittens(data))
    }
}
