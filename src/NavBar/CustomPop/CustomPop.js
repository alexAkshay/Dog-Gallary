import "./CustomPop.css";
import { useState } from "react";

function CustomPop({ names, handleCustomClose }) {
  const [selectedOption, setOption] = useState("");
  const [number, setNumber] = useState("");
  const [customImg, setCustomImg] = useState([]);
  const [isRender, setRender] = useState(false);

  const handleOption = (dog) => {
    setOption(dog.target.value);
  };
  const handleInput = (num) => {
    setNumber(num.target.value);
  };
  let option = names.map((name) => {
    return <option>{name}</option>;
  });

  const handleSubmit = () => {
    setRender(true);
    fetch(`https://dog.ceo/api/breed/${selectedOption}/images/random/${number}`)
      .then((response) => response.json())
      .then((data) => {
        setCustomImg(data.message);
      });
  };
  return (
    <div className="popup-container">
      <div className="wrapper">
        <div className="top">
          <h3>Custom Search</h3>
          <div className="cancel-symbol" onClick={handleCustomClose}>
            x
          </div>
        </div>
        <div className="middle">
          <select
            placeholder="Select a Breed"
            className="select"
            onClick={handleOption}
          >
            <option hidden value="default">
              Select a Breed
            </option>
            {option}
          </select>
          <input
            type="number"
            placeholder="Number of Images"
            className="input-box"
            onChange={handleInput}
          ></input>
          <button type="submit" className="button" onClick={handleSubmit}>
            GET IMAGES
          </button>
        </div>

        <div className="img-cont">
          {isRender ? (
            <>
              {number.length === 0 ? (
                <h3>Enter the Number of images!!!!</h3>
              ) : null}
              <h3>{`Showing ${number} images of ${selectedOption}`}</h3>

              {customImg.map((image) => {
                return <img src={image} alt="dog"></img>;
              })}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default CustomPop;
