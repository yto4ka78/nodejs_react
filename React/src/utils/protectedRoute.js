import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/registration" />;
  }

  try {
    const decoded = jwtDecode(token);

    const userHasAccess = decoded.roles.some((role) =>
      allowedRoles.includes(role)
    );

    if (!userHasAccess) {
      return <Navigate to="/" />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
