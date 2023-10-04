import { useKitten } from "../hooks/useKitten";
import { Skeleton } from "./Skeleton";
import { DetailedCat } from "./DetailedCat";

export const DetailCat = () => {

   const { kitten } = useKitten();

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