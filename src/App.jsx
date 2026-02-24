import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';

// Pages
import Home from "./pages/home";
import Session from "./pages/new_session";

// Auth
// import Login from "./auth/login";
// import Suscription from "./auth/suscription";


function App() {

  return (
    <>
      <Navbar />
        <div className="container mt-4"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-session" element={<Session />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/suscription" element={<Suscription />} /> */}
          </Routes>
        </div>
    </>
  )
}

export default App;
