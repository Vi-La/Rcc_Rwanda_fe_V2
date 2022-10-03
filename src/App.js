import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollTop'
import MainRoutes from './routes/Routes'
import Home from "./pages/Home";
import DashRoutes from "./routes/DashRoutes";
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard/*" element={<DashRoutes />} />
            </Route>
            <Route path="/*" exact element={<MainRoutes />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
