import { Skeleton } from "./Skeleton";
import { DetailedCat } from "./DetailedCat";
import { useSelector } from "react-redux";

export const DetailCat = () => {

   const kitten = useSelector(state => state.kittens.kitten)

   return (
      <div className="container justify-content-center">

         {
            kitten == null ?
               (
                  <Skeleton />
               ) :
               (
                  <DetailedCat kitten={kitten} />
               )
         }
      </div>
   )
}