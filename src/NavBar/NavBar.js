import "./NavBar.css";
import { useState } from "react";
import CustomPop from "./CustomPop/CustomPop";

function NavBar({ names }) {
  const [isCustomOpen, setCustom] = useState(false);
  const handleClickedCustom = () => {
    setCustom(true);
  };
  const handleCustomClose = () => {
    setCustom(false);
  };
  return (
    <>
      {isCustomOpen ? (
        <CustomPop
          names={names}
          handleCustomClose={handleCustomClose}
          handleClickedCustom={handleClickedCustom}
        />
      ) : null}
      <div className="navbar">
        <h2>Dog Gallery</h2>
        <button type="submit" onClick={handleClickedCustom} className="custom">
          Custom Search
        </button>
      </div>
    </>
  );
}
export default NavBar;
