import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./BackButton.css";

function BackButton({ to = "/", text = "Back to Home" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(to);
  };

  return (
    <button type="button" onClick={handleBack} className="back-button">
      <FiArrowLeft aria-hidden="true" />
      <span>{text}</span>
    </button>
  );
}

export default BackButton;