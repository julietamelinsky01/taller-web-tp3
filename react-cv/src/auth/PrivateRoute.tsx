import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

export default function PrivateRoute({ children, isAuthenticated }: PrivateRouteProps) {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}
