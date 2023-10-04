import { useKittenHook } from "../hooks/useKittenHook"
import { setkittens } from "../slices/kittens.slice"

export const setkittensThunk = (num) => {
    return async(dispatch, getState) => {
        
        const { url } = useKittenHook()
        const resp = await fetch(url)
        const data = await resp.json()
        
        dispatch(setkittens(data))
    }
}
