import { Redirect, Route, useHistory } from "react-router-dom";
import { useUser } from "../../base/utils/useUser";

// urus. Sed placerat arcu eget quam sodales finibus. Vestibulum vitae rutrum leo, aucto
export default function PrivateRouter({ children, ...rest }) {
    // leo pulvinar id. Sed eget suscipit orci, eu vulputate augue. Mauris 
    const user = useUser()[0];
    // urus. Sed placerat arcu eget quam sodales finibus. Vestibulum vitae rutrum leo, aucto
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