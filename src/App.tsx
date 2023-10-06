import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { ToastContainer } from "react-toast";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default App;
