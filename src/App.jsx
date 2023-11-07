import "./App.css";
import routes from "./Router/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import Loader from "react-js-loader";
import PrivateRoute from "./Router/PrivateRoute";
import Chat from "./pages/Chat";
import { useDispatch, useSelector } from "react-redux";
import { getAuthenticated } from "./redux/actions/user";
import Web from "./pages/Web";
import MainLayout from "./components/Layouts/MainLayout";
function App() {
  const sessionIdentifier = localStorage.getItem("sessionIdentifier");
  const { isAuthenticated } = useSelector(state=>state.user)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(sessionIdentifier){
      dispatch(getAuthenticated(sessionIdentifier));
    }
  }, []);
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

        </Routes>
      </Router>
    </div>
  );
}

export default App;
