import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { convertTime } from "../../utils/convertTime";
import { API_URL } from "../../constants/api/api";
import Backbutton from "./BackButton";

function Message() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = API_URL + "/api/messages" + "/" + id;

  useEffect(
    function () {
      async function fetchMessage() {
        try {
          const res = await fetch(url);

          if (res.ok) {
            const json = await res.json();
            setMessage(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchMessage();
    },
    [url]
  );

  if (loading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <div className="message-wrapper">
        <div>
          <Backbutton />
        </div>
        <div className="message-container" key={message.data.id}>
          <div className="person-info-header">
            <h3>{message.data.attributes.fullname}</h3>
            <div className="inline">
              <p>Email: {message.data.attributes.email}</p>
              <p>{convertTime(message.data.attributes.publishedAt)}</p>
            </div>
          </div>
          <div className="message-details">
            <p>Subject:{message.data.attributes.subject}</p>
            <p>{message.data.attributes.message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
