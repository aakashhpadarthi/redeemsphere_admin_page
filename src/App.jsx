import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './components/Homepage';
import Couponsmanage from './components/Couponsmanage';
import Usermanage from './components/Usermanage';
import Registerpage from './components/Registerpage';
import Loginpage from './components/Loginpage';
import Paymentcvc from './components/Paymentcvc';
const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/coupons", element: <Couponsmanage /> },
  { path: "/users", element: <Usermanage /> },
  { path: "/login", element: <Loginpage /> },
  { path: "/register", element: <Registerpage /> },
  { path: "/payment", element: <Paymentcvc /> },
  { path: "*", element: <h1>Page Not Found</h1> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
