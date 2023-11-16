import "./App.css";
import routes from "./Router/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Loader from "react-js-loader";
import PrivateRoute from "./Router/PrivateRoute";
import Chat from "./pages/Chat";
import { useDispatch, useSelector } from "react-redux";
import { getAuthenticated } from "./redux/actions/user";
import Web from "./pages/Web";
import MainLayout from "./components/Layouts/MainLayout";
import MessengerLayout from "./components/Layouts/MessengerLayout";
import Meeting from "./pages/Meeting";
import 'react-loading-skeleton/dist/skeleton.css'

// const Meeting = lazy(() => import("./pages/Meeting"));
function App() {
  const sessionIdentifier = localStorage.getItem("sessionIdentifier");
  const { isAuthenticated } = useSelector(state => state.user)
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   if(sessionIdentifier){
  //     dispatch(getAuthenticated(sessionIdentifier));
  //   }
  // }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      if (sessionIdentifier) {
        await dispatch(getAuthenticated(sessionIdentifier));
        setLoading(false);
      }
      else {
        setLoading(false);
      }
    };

    authenticateUser();
  }, [dispatch, sessionIdentifier]);

  if (loading) {
    return (
      <div className="loader-container">
        <Loader type="bubble-scale" bgColor={`#2cb45f`} color={'#28282882'} size={50} />
      </div>
    )
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={
                <Suspense fallback={<> <Loader type="bubble-scale" bgColor={`#2cb45f`} color={'#28282882'} size={50} /></>}>
                  {item.element}
                </Suspense>
              }
            />
          ))}

          <Route path="/chat" element={
            <PrivateRoute isAuthenticated={isAuthenticated} redirect="/nz-chat-web">
              <Chat />
            </PrivateRoute>
          }
          />

          <Route path="/nz-chat-web" element={
            <PrivateRoute isAuthenticated={!isAuthenticated} redirect="/chat">
              <MainLayout><Web /></MainLayout>
            </PrivateRoute>
          }
          />


          <Route path="/meeting" element={
            <PrivateRoute isAuthenticated={isAuthenticated} redirect="/nz-chat-web">
              <MessengerLayout><Meeting /></MessengerLayout>
            </PrivateRoute>
          }
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
