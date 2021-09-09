import { Redirect, Route } from "react-router";

function PrivateRoute(props) {
  return (
    <Route {...props}>
      {props.isLogin ? props.children : <Redirect to="/auth" />}
    </Route>
  );
}

export default PrivateRoute;