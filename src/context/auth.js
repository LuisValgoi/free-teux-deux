import { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../services/auth";

const signIn = () => {};
const signOut = () => {};

const AuthContext = createContext({ signed: false, loading: false, user: {}, signIn, signOut });

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("it must be used within a Provider");
  return auth;
}

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    const response = await auth.signIn();

    setUser(response.user);
    localStorage.setItem("user", JSON.stringify(response.user));
    setLoading(false);
  };

  const handleSignOut = async () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem("user");

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }
    loadStoragedData();
  }, []);

  return <AuthContext.Provider value={{ signed: !!user, loading: loading, user: user, signIn: handleSignIn, signOut: handleSignOut }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
