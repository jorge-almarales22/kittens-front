import { useSelector } from "react-redux"
import { Cat } from "./Cat"
import { Skeleton } from "./Skeleton"

export const Cats = () => {

    const {kittens} = useSelector(state => state.kittens)

   return (
    <>
      <h1 className="title">Adorable Kittens</h1>
      <div className={`container ${kittens.length === 0 ? 'cont-skeleton' : ''}`}>
        
        {
            kittens.length === 0 ?
            (
                <Skeleton/>
            ):
            (

                kittens.map((kitten, index) => <Cat key={index} kitten={kitten} />)
            )
        }
      </div>
    </>
   )
}