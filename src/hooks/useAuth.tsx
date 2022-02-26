import {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";

import { HttpService } from "../services/HttpService";

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  birthdate: string;
  gender: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface AuthContext {
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
  user: User;
  token: string;
  isLogged: boolean | undefined;
}

function AuthProvider({ children }: any) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function loadUserStorageDate() {
    const token = localStorage.getItem("@ioasysBooks:token");
    const user = localStorage.getItem("@ioasysBooks:user");

    if (token && user) {
      //@ts-ignore
      HttpService.defaults.headers.Authorization = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
    return {} as AuthState;
  }

  const login = useCallback(async ({ email, password }): Promise<void> => {
    const response = await HttpService.post("/auth/sign-in", {
      email,
      password,
    });

    const { authorization } = response.headers;
    const user: User = {
      id: response.data.id,
      name: response.data.name,
      birthdate: response.data.birthdate,
      gender: response.data.gender,
    };

    //@ts-ignore
    HttpService.defaults.headers.Authorization = `Bearer ${authorization}`;

    if (response) {
      localStorage.setItem("@ioasysBooks:user", JSON.stringify(user));
      localStorage.setItem("@ioasysBooks:token", authorization);
    } else {
      return;
    }

    setData({ token: authorization, user });
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem("@ioasysBooks:token");
      localStorage.removeItem("@ioasysBooks:user");

      //@ts-ignore
      delete HttpService.defaults.headers.authorization;
      setData({} as AuthState);
      
    } catch (err) {

    }
  }, []);

  useEffect(() => {
    loadUserStorageDate();
  }, []);

  return (
    <authContext.Provider
      value={{
        login,
        logout,
        user: data.user,
        token: data.token,
        isLogged: !!data.token,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

const authContext = createContext<AuthContext>({} as AuthContext);

function useAuth(): AuthContext {
  const context = useContext(authContext);

  return context;
}

export { useAuth, useContext };

export default AuthProvider;
