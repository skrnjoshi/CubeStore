import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const LoginRedirectHandler = () => {
  const { redirect } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("LoginRedirectHandler - Current location:", location.pathname);
    console.log("LoginRedirectHandler - Redirect param:", redirect);

    // Redirect to login with proper query parameter
    const redirectPath = redirect ? `/${redirect}` : "/";
    const loginUrl = `/login?redirect=${encodeURIComponent(redirectPath)}`;

    console.log("LoginRedirectHandler - Redirecting to:", loginUrl);
    navigate(loginUrl, { replace: true });
  }, [redirect, navigate, location]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p>Redirecting to login...</p>
    </div>
  );
};

export default LoginRedirectHandler;
