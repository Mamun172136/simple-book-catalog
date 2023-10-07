import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { setLoading, setUser } from "./redux/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { ToastContainer } from "react-toast";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.isLoading);

  if (loading) {
    // Return a loading indicator or a different component
    return <p>Loading...</p>;
  }
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(true));
      }
    });
  }, [dispatch]);

  if (loading) {
    // Return a loading indicator or a different component
    return <p>Loading...</p>;
  }

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default App;
