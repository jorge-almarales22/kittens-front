import { useDispatch } from "react-redux"
import "./styles/kittens.css"
import { useEffect } from "react"
import { setkittensThunk } from "./thunks/kittens.thunk"
import { RoutesApp } from "./components/Routes"

export const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setkittensThunk())
  }, []);

   return (
      <>
        <RoutesApp/>
      </>
   )
}