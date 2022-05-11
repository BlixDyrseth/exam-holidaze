import { useState, useEffect } from "react";
import { API } from "../../constants/api/api";
import Establishments from "./Establishments";

function EstablishmentList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setData(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data.map((establishment) => (
        <div key={establishment.id}>
          <div>
            <h2>{establishment.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EstablishmentList;
