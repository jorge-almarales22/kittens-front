import { setkittens } from "../slices/kittens.slice"

export const setkittensThunk = (num) => {
    return async(dispatch, getState) => {
        
        const resp = await fetch(`http://localhost:4000/kittens`)
        const data = await resp.json()
        
        dispatch(setkittens(data))
    }
}
