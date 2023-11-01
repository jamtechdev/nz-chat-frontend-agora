import "./App.css";
import routes from "./Router/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loader from "react-js-loader";
function App() {
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
