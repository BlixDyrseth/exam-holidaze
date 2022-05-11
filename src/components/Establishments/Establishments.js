import Header from "../layout/Header";
import EstablishmentList from "./EstablismentList";
import useFetch from "../../hooks/useFetch";
import { API } from "../../constants/api/api";

function Establishments() {
  return (
    <div>
      <Header>Hotel HotelOverview</Header>
      <EstablishmentList />
    </div>
  );
}

export default Establishments;
