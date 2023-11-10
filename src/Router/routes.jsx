import React from "react";
import { lazy } from "react";
// import PrivateRoute from "./PrivateRoute";
import MainLayout from "../components/Layouts/MainLayout";
import MessengerLayout from "../components/Layouts/MessengerLayout";
const IndexPage = lazy(() => import("../pages/IndexPage"));
const Meeting = lazy(() => import("../pages/Meeting"));
const routes = [
  {
    path: "/",
    element: <MainLayout><IndexPage /></MainLayout>,
  },
  {
    path: "/meeting",
    element: <MessengerLayout><Meeting /></MessengerLayout>,
  }
];

export default routes;
// {
//     path: "/private-route",
//     element: (
//       <PrivateRoute
//         element={<YourProtectedComponent />}
//       />
//     ),
//   }
