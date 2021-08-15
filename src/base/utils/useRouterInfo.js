import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"


function useRouterInfo() {
    const location = useLocation();
    const history = useHistory();
    const params = useParams();
    const routeMatch = useRouteMatch();

    return [location, history, params, routeMatch];
}

export default useRouterInfo
