import React from "react";
import { lazy } from "react";
// import PrivateRoute from "./PrivateRoute";
import MainLayout from "../components/Layouts/MainLayout";
import MessengerLayout from "../components/Layouts/MessengerLayout";
// import Web from "../pages/Web";
// import Home from "../pages/IndexPage";
const Home = lazy(() => import("../pages/IndexPage"));
const Web = lazy(() => import("../pages/Web"));
// const IndexPage = lazy(() => import("../pages/IndexPage"));
// const CreateMeeting = lazy(() => import("../pages/CreateMeeting"));

const IndexPage = lazy(() => import("../pages/IndexPage"));
const Meeting = lazy(() => import("../pages/Meeting"));
const routes = [
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
  },
  // {
  //   path: "/meeting",
  //   element: <MessengerLayout><Meeting /></MessengerLayout>,
  // }
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
