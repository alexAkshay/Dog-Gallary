import Card from "./Card";
import "./CardList.css";

function CardList({ names, handleClickedPopup }) {
  return (
    <div className="CardList">
      {names.map((name) => {
        return (
          <Card
            name={name}
            selectedDog={name}
            handleClickedPopup={handleClickedPopup}
          />
        );
      })}
    </div>
  );
}
export default CardList;
