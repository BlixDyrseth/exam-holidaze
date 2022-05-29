import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../constants/api/api";
import { convertTime } from "../../utils/convertTime";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

function MessageList() {
  const { loading, error, data } = useFetch(
    API_URL + "/api/messages" + "?sort=createdAt:desc"
  );

  if (loading) return <Loader />;
  if (error) return <p>Error: </p>;

  return (
    <div className="messagelist-container">
      <h3>Messages</h3>
      {data.data.map((message) => (
        <div className="message-item" key={message.id}>
          <Link className="space-between" to={`/admin-message/${message.id}`}>
            <b>
              {message.attributes.fullname} - {message.attributes.subject}
            </b>
            <p>{convertTime(message.attributes.publishedAt)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
