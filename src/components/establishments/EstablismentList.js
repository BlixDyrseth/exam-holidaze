import { useState, useEffect } from "react";
import { API } from "../../constants/api/api";

function EstablishmentList() {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setEstablishments(json);
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
      {establishments.map(function (establishment) {
        return (
          <div key={establishment.data.id}>
            <h1>{establishment.data.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default EstablishmentList;
