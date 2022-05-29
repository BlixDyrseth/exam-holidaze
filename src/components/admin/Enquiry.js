import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { convertTime } from "../../utils/convertTime";
import { API_URL } from "../../constants/api/api";
import Backbutton from "./BackButton";
import Loader from "../common/Loader";

function Enquiry() {
  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = API_URL + "/api/enquiries" + "/" + id;

  useEffect(
    function () {
      async function fetchEnquiry() {
        try {
          const res = await fetch(url);

          if (res.ok) {
            const json = await res.json();
            setEnquiry(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchEnquiry();
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>An error occured: {error}</div>;
  }

  console.log(enquiry.data.attributes.establishment_name);

  return (
    <>
      <div className="message-wrapper">
        <div>
          <Backbutton />
        </div>
        <div className="enquiery-container" key={enquiry.data.id}>
          <div className="person-info-header">
            <h3>{enquiry.data.attributes.fullname}</h3>
            <p>Email: {enquiry.data.attributes.email}</p>
            <p>Phone: {enquiry.data.attributes.phone_number}</p>
          </div>
          <div className="enquiery-details">
            <div className="inline">
              <b>Enquiry for</b>
              <p>{convertTime(enquiry.data.attributes.publishedAt)}</p>
            </div>
            <h3>{enquiry.data.attributes.establishment_name}</h3>
            <p>Adress: ???</p>
            <div className="check-container">
              <p>Check in:{convertTime(enquiry.data.attributes.check_in)}</p>
              <p>Check out:{convertTime(enquiry.data.attributes.check_out)}</p>
            </div>
            <p>Number of guests:{enquiry.data.attributes.guests}</p>
            <p>Special requests: {enquiry.data.attributes.special_requests}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enquiry;
