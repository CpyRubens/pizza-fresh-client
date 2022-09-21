import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { RoutePath } from "types/routes";
import Home from "pages/Home";
const Router = () =>{
    return(
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />}/>
        </Routes>
    );
}
export default Router;