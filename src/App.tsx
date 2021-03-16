import { Route, Switch, withRouter } from "react-router-dom";
import StartingPage from "./containers/startingPage/startingPage";
import Dashboard from "./containers/dashboard/dashboard";
import Header from "./hoc/header/header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/" component={StartingPage} />
      </Switch>
    </>
  );
}

export default withRouter(App);
