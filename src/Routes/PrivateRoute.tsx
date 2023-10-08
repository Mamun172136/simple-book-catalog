import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}
export default function PrivateRoute({ children }: IProps) {
  const location = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.user);

  // if (isLoading) {
  //   return <p> loading .....</p>;
  // }

  if (!user.email && isLoading) {
    return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
  }
  return children;
}
