import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginImage from "../../assets/Images/LoginImage.jpg";
import { userLogin } from "../../Redux/Login/LoginAction";
import { RootState, AppDispatch } from "../../Redux/index";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isLogged = useSelector((state: RootState) => state.Login.isLogged);

  const handleLogin = (): void => {
    setErrorMessage("");
    dispatch(userLogin(email, password, setErrorMessage));
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/dashboard");
    }
  }, [isLogged, navigate]);

  return (
    <div className="login-container">
      <img className="login-image" src={LoginImage} alt="logo" />

      <div className="input-group email-group">
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
      </div>

      <div className="input-group password-group">
        <div className="input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />
          <span
            className="toggle-password-visibility"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
      </div>

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Login;
