import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../constants/api/api";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

function EstablishmentList() {
  const { loading, error, data } = useFetch(
    API_URL + "/api/establishments?populate=*"
  );

  if (loading) return <Loader />;
  if (error) return <p>Error: </p>;

  return (
    <div className="establishment-container">
      {data &&
        data.data.map((establishment) => (
          <div className="overview-card" key={establishment.id}>
            <Link to={`detail/${establishment.id}`}>
              <div className="temp-thumbnail"></div>
              <div className="card-textbox">
                <h3>{establishment.attributes.name}</h3>
                <div className="small-text">
                  <p>{establishment.attributes.type}, </p>
                  <p>{establishment.attributes.adress}</p>
                </div>
                <div className="establishment-price">
                  <b>{establishment.attributes.price} kr per night</b>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default EstablishmentList;
