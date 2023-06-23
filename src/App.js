import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const Login = React.lazy(() => import("./Pages/Login"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard"));

function App() {
  return (
    <>
    <Router>
      <Suspense>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Suspense> 
      </Router>
    </>
  );
}

export default App;
