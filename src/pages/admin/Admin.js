import Subheader from "../../components/layout/Subheader";
import CurrentListings from "../../components/admin/CurrentListings";
import AddEstablishmentListing from "../../components/admin/AddEstablishmentListing";

function Admin() {
  return (
    <div className="admin-container">
      <div className="admin-item">
        <Subheader>Current Listings</Subheader>
        <CurrentListings />
      </div>
      <div className="admin-item">
        <Subheader>Add Listing</Subheader>
        <AddEstablishmentListing />
      </div>
    </div>
  );
}

export default Admin;
