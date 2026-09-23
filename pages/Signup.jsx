import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [ageError, setAgeError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setAgeError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // AGE VALIDATION
    if (age < 7) {
      setAgeError(
        "Oops, you're a little early! 💜 We can't wait to have you join Evora when you're 7."
      );
      return;
    }

    if (age > 16) {
      setAgeError(
        "Oops, looks like you've outgrown Evora! 💜"
      );
      return;
    }

    // PASSWORD VALIDATION
    if (password.length < 8) {
      setPasswordError(
        "Your password must be at least 8 characters long."
      );
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError(
        "Your password must contain an uppercase letter."
      );
      return;
    }

    if (!/[a-z]/.test(password)) {
      setPasswordError(
        "Your password must contain a lowercase letter."
      );
      return;
    }

    if (!/[0-9]/.test(password)) {
      setPasswordError(
        "Your password must contain a number."
      );
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Your passwords do not match.");
      return;
    }

    try {
      // CHECK IF EMAIL ALREADY EXISTS
      const existingUserResponse = await fetch(
        `http://localhost:3000/users?email=${email}`
      );

      if (!existingUserResponse.ok) {
        throw new Error("Could not check existing users.");
      }

      const existingUsers = await existingUserResponse.json();

      if (existingUsers.length > 0) {
        setError("An account with this email already exists.");
        return;
      }

      // CREATE ACCOUNT
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age: Number(age),
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Account could not be created.");
      }

      const data = await response.json();

      console.log("Account created:", data);

      setSuccess(
        "Account created successfully! You can now log in."
      );

      // CLEAR FORM
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error("Signup error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-header">
          <h1>Create your Evora account</h1>

          <p>
            Start your learning journey with Evora.
          </p>
        </div>

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your child's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>

            <input
              id="age"
              type="number"
              placeholder="Enter your child's age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />

            {ageError && (
              <p className="age-error">
                {ageError}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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

            {passwordError && (
              <p className="signup-error">
                {passwordError}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm password</label>

            <div className="password-input-wrapper">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Repeat your password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword((visible) => !visible)}
                aria-label={showConfirmPassword ? "Hide confirmation password" : "Show confirmation password"}
              >
                {showConfirmPassword ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
              </button>
            </div>

            {confirmPasswordError && (
              <p className="signup-error">{confirmPasswordError}</p>
            )}
          </div>

          {error && (
            <p className="signup-error">
              {error}
            </p>
          )}

          {success && (
            <p className="signup-success">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="signup-button"
          >
            Create Account
          </button>

        </form>

        <div className="signup-login">
          Already have an account?{" "}
          <NavLink to="/login">
            Log in
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default Signup;