import "./App.css";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";
import CardList from "./Card/CardList";
import PopUp from "./PopUp/PopUp";
import { useEffect, useState } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [search, setSearch] = useState("");
  const [isPopupOpen, setPopup] = useState(false);
  const [clickedDog, setClickedDog] = useState({});
  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then((response) => response.json())
      .then((data) => {
        let DogNames = Object.keys(data.message);
        setNames(DogNames);
      });
  }, []);
  const handleChange = (search) => {
    setSearch(search);
  };
  const filteredName = names.filter((name) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });
  const handleClickedPopup = (selectedDog) => {
    // console.log(selectedDog);
    setPopup(true);
    setClickedDog(selectedDog);
  };
  const handleClose = () => {
    setPopup(false);
    setClickedDog({});
  };

  return (
    <div className="App">
      {isPopupOpen ? (
        <PopUp
          names={filteredName}
          clickedDog={clickedDog}
          handleClose={handleClose}
        />
      ) : null}

      <NavBar names={names} />

      <SearchBar handleChange={handleChange} />
      <CardList names={filteredName} handleClickedPopup={handleClickedPopup} />
    </div>
  );
}
export default App;
