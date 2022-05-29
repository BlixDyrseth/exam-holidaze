import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Backbutton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
    </>
  );
};

export default Backbutton;
