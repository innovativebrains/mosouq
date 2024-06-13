import './App.css';

import routes from './routes/routes';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import WebsiteLayout from './layout/website.layout';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
 
    <div style={{height:'100%'}}>
      <Router>

        <Routes>
          <Route element={<WebsiteLayout><Outlet /></WebsiteLayout>} >
            {routes.map((featu) => featu.type == 'public' && (
              <Route element={featu.element} path={featu.path} exact={featu} />
            ))}
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}
export default App;