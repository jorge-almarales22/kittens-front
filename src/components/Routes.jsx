import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { DetailCat } from "./DetailCat";

export const RoutesApp = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<Home/>}></Route>
                <Route path="/cat/:id" element={<DetailCat/>}></Route>

            </Routes>
        </>
    )
}