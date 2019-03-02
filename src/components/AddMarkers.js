import React from "react";
import { compose, withStateHandlers } from "recompose";
import {
  InfoWindow,
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = compose(
  withStateHandlers(
    () => ({
      isMarkerShown: false,
      markerPosition: null
    }),
    {
      onMapClick: ({ isMarkerShown }) => e => {
        return {
          markerPosition: e.latLng,
          isMarkerShown: true
        };
      }
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} />}
  </GoogleMap>
));

export default class AddMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ height: `980px`, marginRight: "10px" }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
