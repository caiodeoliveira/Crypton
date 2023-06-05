import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/templates/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
};