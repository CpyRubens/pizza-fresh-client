import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { RoutePath } from "types/routes";
import Home from "pages/Home";
import Login from "pages/Login";
import Settings from "pages/Settings";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.SETTINGS} element={<Settings />} />
            <Route path={RoutePath.HOME} element={<Home />} />
        </Routes>
    );
}
export default Router;