/*global google*/
import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

let locations = [
  { lat: 28.7041, lng: 77.1025 },
  { lat: 30.7333, lng: 76.7794 }
];

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.7041, lng: 77.1025 }}>
      {locations.map(latlng => {
        return <Marker position={{ lat: latlng.lat, lng: latlng.lng }} />;
      })}
    </GoogleMap>
  ))
);

export default class OptimalMap extends Component {
  render() {
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: `980px`,
              marginLeft: 0,
              paddingLeft: 0,
              marginRight: "10px"
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
