import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = { isAuthenticated: boolean; login: () => void; logout: () => void; };
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login:()=>setIsAuthenticated(true), logout:()=>setIsAuthenticated(false) }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth(){ const ctx = useContext(AuthContext); if(!ctx) throw new Error("useAuth dentro de <AuthProvider>"); return ctx; }
