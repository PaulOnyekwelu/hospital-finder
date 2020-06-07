import React, { useState } from "react";
import { Container, Box } from "@material-ui/core";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import SearchField from "./searchField";
import MapComp from "./mapComp";
import GeoFencing from "./geofencing";

const customStyle = {
  mainContainer: {
    width: "90%",
    height: "80%",
    overflow: "hidden",
  },
  formSection: {
    display: "flex",
    width: "inherit",
    margin: "0 auto",
    justifyContent: "space-around",
    color: "white",
  },
};

const Main = (props: any): JSX.Element => {
  const [inputGeoFencing, setInputGeoFencing] = useState(1000);
  const [address, setAddress] = useState('');
  const [latlng, setLatlng] = useState({ lat: 6.45407, lng: 3.39467 });
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});

  const handleChange = (address: string) => {
    setAddress(address);
  };

  const handleSelect = (address: string) => {
    geocodeByAddress(`hospital ${address}`)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setAddress(address);
        setLatlng(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  const onGeoFenceChange = (e: any) => {
    setInputGeoFencing(parseInt((e.target as HTMLInputElement).value));
  };

  const searchOptions = {
    location: new google.maps.LatLng(latlng.lat, latlng.lng),
    radius: inputGeoFencing,
    types: ["hospital"],
  };

  const onMarkerClick = (marker: React.SetStateAction<{}>) => {
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  return (
    <Container style={customStyle.mainContainer}>
      <Box style={customStyle.formSection}>
        <GeoFencing onGeoFenceChange={onGeoFenceChange} />
        <SearchField
          address={address}
          handleChange={handleChange}
          handleSelect={handleSelect}
        />
      </Box>
      <MapComp
        latlng={latlng}
        address={address}
        inputGeoFencing={inputGeoFencing}
        searchOptions={searchOptions}
        onMarkerClick={onMarkerClick}
        showingInfoWindow={showingInfoWindow}
        activeMarker={activeMarker}
      />
    </Container>
  );
};

export default React.memo(Main);
