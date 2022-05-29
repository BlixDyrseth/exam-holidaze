import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../constants/api/api";
import Loader from "../common/Loader";

function CurrentListings() {
  const { loading, error, data } = useFetch(API_URL + "/api/establishments");

  if (loading) return <Loader />;
  if (error) return <p>Error: </p>;

  return (
    <div className="current-listing-container">
      <h3>Current listings</h3>
      {data.data.map((establishment) => (
        <div className="listing-item" key={establishment.id}>
          <b>{establishment.attributes.name}</b>
        </div>
      ))}
    </div>
  );
}

export default CurrentListings;
