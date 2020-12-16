import { useEffect } from "react";
import { connect } from "react-redux";

import Loader from "../Loader";
import Navbar from "../Navbar";
import LocationList from "./LocationList";

import { getLocationsRequest as request } from "../../actions/GetLocations";

const GetLocations = ({ request, loading, pumps, history }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords || {};
      request({ latitude, longitude });
    });
  }, [request]);

  console.log(loading, pumps);

  return (
    <div>
      <Navbar name="Dashboard" />
      {loading ? <Loader /> : <LocationList history={history} pumps={pumps} />}
    </div>
  );
};

const mapStatesToProps = (state) => ({
  loading: state.Locations.loading,
  error: state.Locations.error,
  pumps: state.Locations.pumps,
  totalPumps: state.Locations.totalPumps,
});

export default connect(mapStatesToProps, {
  request,
})(GetLocations);
