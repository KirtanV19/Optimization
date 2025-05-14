import useRoute from "../hooks/use-route";
import { Route, Routes } from "react-router";
import WithUser from "../layout/private-layout";

const Routing = () => {
    const { privateRoutes } = useRoute();

    return (
        <Routes>
            <Route element={<WithUser />}>
                {privateRoutes.map(({ id, element: Component, path, ...otherData }) => (
                    <Route key={id} element={<Component />} path={path} {...otherData} />
                ))}
            </Route>
            <Route path="*" element={<p>Not Found</p>} />
        </Routes>
    );
};

export default Routing;
