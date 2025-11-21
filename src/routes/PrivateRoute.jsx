import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("userId");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
