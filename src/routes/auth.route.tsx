import { Routes, Route } from "react-router-dom";

import { Login } from "../pages";

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
