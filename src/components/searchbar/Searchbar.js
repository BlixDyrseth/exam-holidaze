import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants/api/api";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  const { loading, error, data } = useFetch(API_URL + "/api/establishments");

  const [searchtext, setSearchtext] = useState("");

  if (loading) return <div className="loading-searchbar"></div>;
  if (error) return <p>Error: </p>;

  return (
    <div>
      <div>
        <input
          id="searchbar"
          className="searchbar"
          placeholder="Search..."
          onChange={(event) => {
            setSearchtext(event.target.value);
          }}
        />
      </div>
      <div className="search-result-container">
        {data.data
          .filter((establishment) => {
            if (searchtext == "") {
              return null;
            } else if (
              establishment.attributes.name
                .toLowerCase()
                .startsWith(searchtext.toLowerCase())
            ) {
              return (
                <div key={establishment.id}>
                  <p>{establishment.attributes.name}</p>
                </div>
              );
            }
          })
          .map((establishment) => {
            return (
              <div className="search-result" key={establishment.id}>
                <Link to={`establishments/detail/${establishment.id}`}>
                  <div className="search-item">
                    {establishment.attributes.name}
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
