import { Route, Switch, withRouter } from "react-router-dom";
import StartingPage from "./containers/startingPage/startingPage";
import Dashboard from "./containers/dashboard/dashboard";

function App() {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/" component={StartingPage} />
      </Switch>
    </>
  );
}

export default withRouter(App);
