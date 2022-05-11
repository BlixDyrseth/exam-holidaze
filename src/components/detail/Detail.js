import Header from "../layout/Header";
import Subheader from "../layout/Subheader";
import Paragraph from "../layout/Paragraph";

function Detail() {
  return (
    <div className="detail-container">
      <div className="detail-header">
        <Header>Detail site</Header>
        <Paragraph>Adress and type</Paragraph>
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
          <Subheader>Short description</Subheader>
          <Paragraph>
            text text texct skldfjasj sskdhjflkasj isdjfklaj wejfrklajxf
            sdfjruklasjd seaijufrliksf eiwfriouedifewu jeg er ekuihaujdh
          </Paragraph>
          <Paragraph>
            text text texct skldfjasj sskdhjflkasj isdjfklaj wejfrklajxf
            sdfjruklasjd seaijufrliksf eiwfriouedifewu jeg er ekuihaujdh
          </Paragraph>
          <button className="button">Book</button>
        </div>
      </div>
      <div className="amenities-container">
        <div>Free WI-FI</div>
        <div>Bar</div>
        <div>Pets welcome</div>
        <div>Mountain view</div>
        <div>Own bathroom</div>
        <div>Wheelchair acscesible</div>
      </div>
    </div>
  );
}

export default Detail;
