import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const useCheckout = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const proceedToCheckout = () => {
    if (userInfo) {
      // User is logged in, go directly to shipping
      navigate("/shipping");
    } else {
      // User is not logged in, redirect to login with shipping as redirect
      const redirectUrl = encodeURIComponent("/shipping");
      navigate(`/login?redirect=${redirectUrl}`);
    }
  };

  return { proceedToCheckout };
};
