import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants/api/api";
import Header from "../../components/layout/Header";
import Subheader from "../../components/layout/Subheader";
import Paragraph from "../../components/layout/Paragraph";
import EnquireModal from "../../components/detail/EnquireModal";
import Loader from "../../components/common/Loader";

function Detail() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const url = API_URL + "/api/establishments" + "/" + id;

  useEffect(
    function () {
      async function fetchDetail() {
        try {
          const res = await fetch(url);

          if (res.ok) {
            const json = await res.json();

            setDetail(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchDetail();
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      {<EnquireModal onClose={() => setOpen(false)} open={open} />}
      <div className="detail-container">
        <div className="detail-header">
          <Header>{detail.data.attributes.name}</Header>
          <div className="small-text">
            <Paragraph>
              {detail.data.attributes.type}, {detail.data.attributes.adress}{" "}
            </Paragraph>
          </div>
          <div className="temp-banner-detail"></div>
        </div>
        <div className="details-main">
          <div className="picture-container">
            <div className="temp-pic-detail"></div>
            <div className="temp-pic-detail"></div>
            <div className="temp-pic-detail"></div>
            <div className="temp-pic-detail"></div>
          </div>
          <div className="text-container-detail">
            <Subheader>{detail.data.attributes.short_description}</Subheader>
            <Paragraph>{detail.data.attributes.description}</Paragraph>
            <button className="button" onClick={() => setOpen(true)}>
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
