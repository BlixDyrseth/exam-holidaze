import Header from "../layout/Header";
import Subheader from "../layout/Subheader";
import Paragraph from "../layout/Paragraph";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="temp-banner"></div>
      <div className="home-container">
        <div className="temp-pic"></div>
        <div className="home-text">
          <Header>Welcome to Bergen</Header>
          <Paragraph>
            We have gathered a large collection of hotels, hostels, BnBs and
            guesthouses for you to browse and chose the perfect location for
            your Bergen holiday.
          </Paragraph>
          <Link to="/establishments">
            <div className="button">Browse</div>
          </Link>
        </div>
      </div>
      <div className="home-container">
        <div className="home-text">
          <Subheader>We book for you!</Subheader>
          <Paragraph>
            You give use your enquires, we talk to the right people and get the
            perfect place for you to stay for your holiday in Bergen.
          </Paragraph>
        </div>
        <div className="temp-pic"></div>
      </div>
      <div className="home-container">
        <div className="temp-pic"></div>
        <div className="home-text">
          <Subheader>Got any questions?</Subheader>
          <Paragraph>Feel free to contact us!</Paragraph>
          <Link to="/contact">
            <div className="button">Contact us!</div>
          </Link>
        </div>
      </div>
      <div className="home-container">
        <div className="temp-bottom-banner">
          <Link to="/establishments">
            <div className="button">Browse</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
