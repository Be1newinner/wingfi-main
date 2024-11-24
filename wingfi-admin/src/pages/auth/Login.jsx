/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginRequest } from '../../redux/reducers/authReducer';
import { selectAuth } from '../../redux/selectors/authSelectors';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import LogoImage from '../../assets/logo/tges-logo.webp';
import Loader from '../../utils/Loader';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { LoaderCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

  const {
    email: emailRole,
    role,
    loading,
    error,
    token,
  } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoginRequest({ email, password }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle showPassword state
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="h-screen flex justify-center items-center w-full bg-custom-bg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow-md w-[350px] py-6 px-[25px] rounded-lg"
      >
        <div>
          <div className="flex justify-center mb-4 items-center w-full">
            <img src={LogoImage} alt="" className="w-[100px] h-auto" />
          </div>
          <h2 className="text-center font-bold text-xl tracking-wider">TGES</h2>
          <h4 className="text-center text-[10px] uppercase font-light tracking-wider text-md">
            Login Dashboard
          </h4>
        </div>
        <div className="flex flex-col gap-1">
          {/* <label className="text-[10px]">Email</label> */}
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-2 text-[12px] border-b-2 border-b-solid outline-none"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          {/* <label className="text-[10px]">Password</label> */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} // Conditionally set the input type
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 text-[12px] border-b-2 border-b-solid outline-none w-full"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={toggleShowPassword} // Toggle password visibility
              className="absolute right-2 top-[13px] text-xl text-gray-600 w-fit"
            >
              {showPassword ? <IoEyeOff size={15} /> : <IoEye size={15} />}{' '}
              {/* Toggle icon */}
            </button>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 flex items-center justify-center rounded-lg font-semibold ${
            loading
              ? 'bg-[#022061] bg-opacity-70 cursor-not-allowed'
              : 'bg-[#022061] text-white'
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <LoaderCircle className="animate-spin text-blue-500 h-6 w-6" />
            </div>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
