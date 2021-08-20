import 'antd/lib/style/index.less'; // antd core styles
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login/index";
import SineUp from "./components/Auth/SienUp";
import Navbar from "./components/Navbar";
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/PrivateRoute/AdminRoute';
import AdminOrder from "./page/AdminOrder";
import Checkout from './page/Checkout';
import CreateService from "./page/CreateService";
import Home from "./page/Home";
import Order from "./page/Order";
import ServiceDetails from './page/ServiceDetails';
import { getService } from './redux/service/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getService())
  }, [])
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/service/:id">
          <ServiceDetails />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/sineUp">
          <SineUp />
        </Route>
        <PrivateRoute path="/orders">
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/checkout/:checkoutId">
          <Checkout />
        </PrivateRoute>
        <AdminRoute path="/create/service">
          <CreateService />
        </AdminRoute>
        <AdminRoute path="/admin/orders">
          <AdminOrder />
        </AdminRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
