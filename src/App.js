import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import AdminOrder from "./page/AdminOrder";
import Authentication from "./page/Authentication";
import Home from "./page/Home";
import Order from "./page/Order";
function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/service/:id">
          <Portfolio />
        </Route>
        <Route path="/auth">
          <Authentication />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/admin/order">
          <AdminOrder />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
