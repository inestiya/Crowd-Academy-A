import { Redirect, Route } from "react-router";

function PrivateRoute(props) {
  return (
    <Route {...props}>
      {props.isLogin ? props.children : <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;