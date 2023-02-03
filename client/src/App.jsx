import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Home/Contact";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/Home/PageNotFound";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Community from "./pages/App/Community";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;