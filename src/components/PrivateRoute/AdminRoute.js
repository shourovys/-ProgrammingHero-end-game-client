import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";


function AdminRoute({ children, ...rest }) {
    const isAdmin = useSelector((state) => state.user?.userInfo?.isAdmin);

    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default AdminRoute;
