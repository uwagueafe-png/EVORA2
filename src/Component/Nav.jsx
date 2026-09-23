import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser")
  );

  useEffect(() => {
    const syncAuthState = () => {
      setLoggedInUser(localStorage.getItem("loggedInUser"));
    };

    window.addEventListener("storage", syncAuthState);
    window.addEventListener("evora-auth-change", syncAuthState);

    return () => {
      window.removeEventListener("storage", syncAuthState);
      window.removeEventListener("evora-auth-change", syncAuthState);
    };
  }, []);

  return (
    <nav className="navbar">

      <div className="logo">
        EVORA
      </div>

      <div className="nav-links">

        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/courses">
          Courses
        </NavLink>

        <NavLink to="/projects">
          Projects
        </NavLink>

        <NavLink to="/live">
          Live
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

      </div>

      <div className="nav-actions">

        {loggedInUser ? (
          <>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              setLoggedInUser(null);
              window.dispatchEvent(new Event("evora-auth-change"));
              navigate("/login");
            }}
          >
            Logout
          </button>
          </>
        ) : (
          <NavLink to="/login">
            Login
          </NavLink>
        )}

        <NavLink to="/courses" className="start-btn">
          Explore Courses
        </NavLink>

      </div>

      {/* HAMBURGER */}
      <button
        type="button"
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >

        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/courses" onClick={closeMenu}>
          Courses
        </NavLink>

        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>

        <NavLink to="/live" onClick={closeMenu}>
          Live
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <div className="mobile-actions">

          {loggedInUser ? (
            <>
            <NavLink
              className="mobile-login"
              to="/dashboard"
              onClick={closeMenu}
            >
              Dashboard
            </NavLink>
            <button
              className="mobile-login"
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                setLoggedInUser(null);
                window.dispatchEvent(new Event("evora-auth-change"));
                closeMenu();
                navigate("/login");
              }}
            >
              Logout
            </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="mobile-login"
              onClick={closeMenu}
            >
              Login
            </NavLink>
          )}

          <NavLink
            to="/courses"
            className="mobile-start"
            onClick={closeMenu}
          >
            Explore Courses
          </NavLink>

        </div>

      </div>

    </nav>
  );
};

export default Nav;