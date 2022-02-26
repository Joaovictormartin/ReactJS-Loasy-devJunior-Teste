import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import { AppRouter } from './app.route';
import { AuthRouter } from './auth.route';

export function Router() {
  const { isLogged } = useAuth();
  return (
    <BrowserRouter>
      { isLogged ?  <AppRouter/> : <AuthRouter/>}
    </BrowserRouter>
  );
}