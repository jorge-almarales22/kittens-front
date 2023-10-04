import { Cats } from "./Cats"

export const Home = () => {

   console.log(process.env.NODE_ENV)
   return (
      <>
        <Cats/>
      </>
   )
}