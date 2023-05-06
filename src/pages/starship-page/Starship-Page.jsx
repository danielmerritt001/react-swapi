import { getShip } from "../../../services/sw-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StarshipPage = (props) => {
  const [shipDetails, setShipDetails] = useState({})
  const { shipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const shipData = await getShip(shipId)
      setShipDetails(shipData)
    }
    fetchDetails()
  }, [shipId])

  return (  
    <>
    <div>Name: {shipDetails.name}</div>
    <datagrid>Model: {shipDetails.model}</datagrid>
    </>
  );
}

export default StarshipPage;