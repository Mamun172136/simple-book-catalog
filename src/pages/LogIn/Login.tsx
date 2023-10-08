import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toast";
// import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { loginUser } from "../../redux/user/userSlice";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  //   const { signIn } = useContext(AuthContext);
  //   const [disabled, setDisabled] = useState(true);

  //   const captchaRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //   useEffect(() => {
  //     loadCaptchaEnginge(6);
  //   }, []);

  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogin = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    dispatch(loginUser({ email: email, password: password }));

    // signIn(email, password).then((result) => {
    //   const user = result.user;
    //   console.log(user);
    //   Swal.fire({
    //     title: "User Login Successful.",
    //     showClass: {
    //       popup: "animate__animated animate__fadeInDown",
    //     },
    //     hideClass: {
    //       popup: "animate__animated animate__fadeOutUp",
    //     },
    //   });
    //   navigate(from, { replace: true });
    // });
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      //   Swal.fire({
      //         title: "User Login Successful.",
      //         showClass: {
      //           popup: "animate__animated animate__fadeInDown",
      //         },
      //         hideClass: {
      //           popup: "animate__animated animate__fadeOutUp",
      //         },
      //       });
      navigate(from, { replace: true });
      toast("login successfully");
    }
  }, [user.email, isLoading]);

  //   const handleValidateCaptcha = (e) => {
  //     const user_captcha_value = e.target.value;
  //     console.log(user_captcha_value);
  //     // const user_captcha_value = captchaRef.current.value;

  //     if (validateCaptcha(user_captcha_value)) {
  //       setDisabled(false);
  //     } else {
  //       setDisabled(true);
  //     }
  //   };
  return (
    <>
      <Helmet>
        <title> Book catalog| Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* <div className="form-control mt-6">
                <input
                  //   disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div> */}

              <div className="form-control mt-6">
                {/* //Show a loading indicator or text when isLoading is true
                <p>Loading...</p>
                // Show the login button when isLoading is false */}
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
                {/* {isLoading ? (
                  // Show a loading indicator or text when isLoading is true
                  <p>Loading...</p>
                ) : (
                  // Show the login button when isLoading is false
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                )} */}
              </div>
            </form>
            <p>
              <small>
                New Here? <Link to="/signup">Create an account</Link>{" "}
              </small>
            </p>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
