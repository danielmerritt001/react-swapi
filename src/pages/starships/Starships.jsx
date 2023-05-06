import { useState, useEffect } from "react";

import StarshipCard from "../../components/starship-card/StarshipCard";
import { getStarshipList } from "../../../services/sw-api";

const Starships = (props) => {
  const [allShips, setAllShips] = useState([])

  useEffect(() => {
    const fetchShipList = async () => {
      const shipData= await getStarshipList()
      setAllShips(shipData.results)
    }
    fetchShipList()
  }, [])

  console.log(allShips)

  return (  
    <>
      <h1>starships</h1>
      {allShips.map((ship) =>
        <StarshipCard 
        key = {ship._id}
        ship = {ship}
        />
        )}
    </>
  );
}
 
export default Starships;