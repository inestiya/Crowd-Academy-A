import { Redirect, Route } from "react-router";

function PrivateRoute(props) {
  return (
    <Route {...props}>
      {props.onLogin ? props.children : <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;