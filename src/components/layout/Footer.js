import logoFooter from "../../logo/holidaze-logo-compact.png";
import List from "./List";

const supportList = [
  "Contact us",
  "Cancelation",
  "FAQ",
  "Rapport website error",
];

const aboutList = [
  "Our story",
  "Bergen Turist Senter",
  "Things to do in Bergen",
  "Work with us?",
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <h4>Support</h4>
        <List
          items={supportList}
          classUl={"footer-list"}
          classLi={"footer-list-item"}
        />
      </div>
      <div>
        <img src={logoFooter} alt="Logo" />
      </div>
      <div className="footer-item">
        <h4>About</h4>
        <List
          items={aboutList}
          classUl={"footer-list"}
          classLi={"footer-list-item"}
        />
      </div>
    </div>
  );
}

export default Footer;
