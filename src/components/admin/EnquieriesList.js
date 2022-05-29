import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../constants/api/api";
import { convertTime } from "../../utils/convertTime";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Loader from "../common/Loader";

function EnquieriesList() {
  const { loading, error, data } = useFetch(
    API_URL + "/api/enquiries" + "?sort=createdAt:desc"
  );

  if (loading) return <Loader />;
  if (error) return <p>Error: </p>;

  return (
    <>
      {" "}
      <Header>Enquiries</Header>
      <div className="enquierylist-container">
        <h3>Enquiries</h3>
        {data.data.map((enquiery) => (
          <div className="enquierylist-item" key={enquiery.id}>
            <Link
              className="space-between"
              to={`/admin-enquiry/${enquiery.id}`}
            >
              <b>
                {enquiery.attributes.fullname} has sendt an enquiery for{" "}
                {enquiery.attributes.establishment_name}
              </b>
              <p>{convertTime(enquiery.attributes.publishedAt)}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default EnquieriesList;
