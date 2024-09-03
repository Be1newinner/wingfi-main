import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginRequest, loginRequestByGoogle } from "../../redux/reducers/auth";
import { useSelector } from "react-redux";
import {
  selectAuthErrors,
  selectIsUserLoading,
  selectUserIsAdmin,
  selectUserUID,
} from "../../redux/selectors/auth";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const [emailIDInput, setEmailIDInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [ErrorInputs, setErrorInputs] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const UserUID = useSelector(selectUserUID);
  const UserIsAdmin = useSelector(selectUserIsAdmin);
  const AuthErrors = useSelector(selectAuthErrors);
  const AuthLoading = useSelector(selectIsUserLoading);

  // const searchParams = useSearchParams();
  // const searchParams = {};
  const navigate = useNavigate();

  const validations = (email: string, password: string): boolean => {
    const tempErrors = { email: "", password: "" };

    // Validations
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) tempErrors.email = "Please Input email ID!";
    else if (!emailRegEx.test(email))
      tempErrors.email = "Please Input valid email ID!";

    if (!password) tempErrors.password = "Please Input password!";
    else if (password.length < 6)
      tempErrors.password = "Email or Password is invalid!";

    if (tempErrors.email || tempErrors.password) {
      setErrorInputs(tempErrors);
      return false;
    } else return true;
  };

  const emailSignIn = async (event: any) => {
    event.preventDefault();

    if (validations(emailIDInput, PasswordInput)) {
      dispatch(
        loginRequest({
          email: emailIDInput,
          password: PasswordInput,
        })
      );
      setErrorInputs({ email: "", password: "" });
    }
  };

  useEffect(() => {
    if (UserUID && UserIsAdmin) navigate("/");
  }, [UserUID, UserIsAdmin, navigate]);

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign In to Wingfi India
        </h2>
        {AuthErrors && (
          <div className="mb-4 p-2 text-sm text-red-700 bg-red-100 rounded">
            {AuthErrors}
          </div>
        )}
        <form className="space-y-6">
          <div className="form-control">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={`input w-full mt-1 text-sm rounded-sm p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 ${
                ErrorInputs.email ? "border-red-500" : "border-gray-300"
              }`}
              maxLength={25}
              value={emailIDInput}
              onChange={(e) => setEmailIDInput(e.target.value)}
              autoComplete="email"
            />
            {ErrorInputs.email && (
              <span className="text-xs text-red-500 mt-1">
                {ErrorInputs.email}
              </span>
            )}
          </div>

          <div className="form-control">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className={`input w-full mt-1 text-sm rounded-sm p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 ${
                ErrorInputs.password ? "border-red-500" : "border-gray-300"
              }`}
              value={PasswordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              autoComplete="current-password"
            />
            {ErrorInputs.password && (
              <span className="text-xs text-red-500 mt-1">
                {ErrorInputs.password}
              </span>
            )}
          </div>

          <button
            className="w-full px-4 py-2 btn text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-in-out"
            onClick={emailSignIn}
          >
            Sign In
          </button>

          <div className="divider">or continue with</div>

          <div className="flex gap-4">
            <button
              className="flex items-center justify-center w-full p-2 bg-white border border-gray-300 rounded-sm hover:bg-gray-100 transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                dispatch(loginRequestByGoogle());
              }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                  fill="#EA4335"
                ></path>
                <path
                  d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                  fill="#34A853"
                ></path>
              </svg>
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
