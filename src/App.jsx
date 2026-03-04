import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';

// Pages
import Home from "./pages/home";
import Session from "./pages/new_session";
import Description from "./pages/info";
import { Account } from './pages/account';
import { Auth } from './pages/auth';

// Groups exercises
import Pull from "./pages/groups/pull";
import Push from "./pages/groups/push";
import Core from "./pages/groups/core";
import Legs from "./pages/groups/legs";

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
          <Route path="/description" element={<Description />} />
          <Route path="/pull" element={<Pull />} />
          <Route path="/push" element={<Push />} />
          <Route path="/core" element={<Core />} />
          <Route path="/legs" element={<Legs />} />
          <Route path="/auth/:pathname" element={<Auth />} />
          <Route path="/account/:pathname" element={<Account />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
