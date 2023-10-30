import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HashRouter,
  Route,
  Routes,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import ProtectedRoutes from './auth/ProtectedRoutes';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const DefaultLayout = React.lazy(() => import("./layout//DefaultLayout"));
const Login = React.lazy(() => import("./views/pages/login/Login"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route
            path="/"
            name="Login Page"
            element={<Login />}
            // render={(props) => <Login {...props} />}
          />
          <Route exact path="/" element={<ProtectedRoutes />}>
            <Route
              exact
              path="*"
              name="Dashboard"
              element={<DefaultLayout />}
            />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
