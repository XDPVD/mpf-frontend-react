import { Redirect, Route, useHistory } from "react-router-dom";
import { useUser } from "../../base/utils/useUser";


export default function PrivateRouter({ children, ...rest }) {
    const user = useUser()[0];
    const history = useHistory();
    return (
        <Route
            {...rest}
            render={() =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            // location object
                            pathname: '/login',
                            state: history.location.pathname,
                        }}
                    />
                )
            }
        />
    );
}