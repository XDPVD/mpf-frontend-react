import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"

//  ligula auctor hendrerit. Praesent sit amet mauris ac sapien placerat auctor. Ut lorem leo, egestas 
function useRouterInfo() {
    const location = useLocation();
    const history = useHistory();
    const params = useParams();
    const routeMatch = useRouteMatch();

    return [location, history, params, routeMatch];
}

export default useRouterInfo
