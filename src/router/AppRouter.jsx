import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Singin from "../pages/auth/Signin";
import Singup from "../pages/auth/Signup";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Singin />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </BrowserRouter>
  );
};
