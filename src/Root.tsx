import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return <Outlet />;
};
