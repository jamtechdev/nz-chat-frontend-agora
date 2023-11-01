import React from "react";
import { lazy } from "react";
// import PrivateRoute from "./PrivateRoute";
import MainLayout from "../components/Layouts/MainLayout";
import MessengerLayout from "../components/Layouts/MessengerLayout";
const IndexPage = lazy(() => import("../pages/IndexPage"));
const CreateMeeting = lazy(() => import("../pages/CreateMeeting"));

const routes = [
  {
    path: "/",
    element: <MainLayout><IndexPage /></MainLayout>,
  },
  {
    path: "/create-meeting",
    element: <MessengerLayout><CreateMeeting /></MessengerLayout>,
  },
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
