import Header from "../../components/layout/Header";
import Subheader from "../../components/layout/Subheader";
import Paragraph from "../../components/layout/Paragraph";
import { Link } from "react-router-dom";
import bookingImage from "../../images/booking-holidaze.png";
import welcomeimage from "../../images/welcome-holidaze.png";
import mailImage from "../../images/holidaze-mail.png";

function Home() {
  return (
    <div>
      <div className="home-wrapper">
        <div className="home-container">
          <div>
            <img
              className="home-illustration"
              src={welcomeimage}
              alt="Illustration of ther bridge of Bergen"
            />
          </div>
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
        <div className="home-container-big">
          <div className="home-text">
            <Subheader>We book for you!</Subheader>
            <Paragraph>
              You give use your enquires, we talk to the right people and get
              the perfect place for you to stay for your holiday in Bergen.
            </Paragraph>
          </div>
          <div>
            <img
              className="home-illustration"
              src={bookingImage}
              alt="Illustration of a lady smiling, talking on her phone and giving a thumbs up"
            />
          </div>
        </div>
        <div className="home-container-small">
          <div>
            <img
              className="home-illustration"
              src={bookingImage}
              alt="Illustration of a lady smiling, talking on her phone and giving a thumbs up"
            />
          </div>
          <div className="home-text">
            <Subheader>We book for you!</Subheader>
            <Paragraph>
              You give use your enquires, we talk to the right people and get
              the perfect place for you to stay for your holiday in Bergen.
            </Paragraph>
          </div>
        </div>
        <div className="home-container">
          <div>
            <img
              className="home-illustration"
              src={mailImage}
              alt="Illustration of a envelope with a dog, a toy car,a question mark and a exclamation mark comming out of it"
            />
          </div>
          <div className="home-text">
            <Subheader>Got any questions?</Subheader>
            <Paragraph>Feel free to contact us!</Paragraph>
            <Link to="/contact">
              <div className="button">Contact us!</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
