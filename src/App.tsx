import { Route, Switch, withRouter } from "react-router-dom";
import StartingPage from "./containers/startingPage/startingPage";
import Dashboard from "./containers/dashboard/dashboard";
import Header from "./hoc/header/header";
function App() {
  return (
    <>
      <Switch>
        <Header>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={StartingPage} />
        </Header>
      </Switch>
    </>
  );
}

export default withRouter(App);
