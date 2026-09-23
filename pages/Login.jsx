import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSubmitting(true);

    try {
      const response = await fetch(
        `http://localhost:3000/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      );
      if (!response.ok) throw new Error("Login request failed.");

      const users = await response.json();

      if (users.length > 0) {
        localStorage.setItem("loggedInUser", JSON.stringify(users[0]));
        window.dispatchEvent(new Event("evora-auth-change"));
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch {
      setError("We could not reach the login service. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h1>Welcome back</h1>
          <p>
            Log in to continue your Evora learning journey.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
          >
            {submitting ? "Logging in..." : "Log In"}
          </button>

        </form>

        <div className="login-signup">
          Don't have an account?{" "}
          <NavLink to="/signup">
            Create an account
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default Login;