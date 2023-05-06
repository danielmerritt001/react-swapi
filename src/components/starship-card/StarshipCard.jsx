import "./StarshipCard.css"

const StarshipCard = (props) => {
  return (  
    <button className="starship-card">{props.ship.name}</button>
  );
}

export default StarshipCard;