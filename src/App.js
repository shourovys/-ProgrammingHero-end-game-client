import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login/index";
import SineUp from "./components/Auth/SienUp";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import AdminOrder from "./page/AdminOrder";
import CreateService from "./page/CreateService";
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
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/sineUp">
          <SineUp />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/create/service">
          <CreateService />
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
