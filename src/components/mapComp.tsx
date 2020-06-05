import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const customStyle = {
  mapComp: {
      width: '85%',
      height: '65%',

  }
}

const MapComp = (props:any):JSX.Element => {

  const onMarkerClick = () => {}

  return(
        <Map google={props.google} zoom={14} style={customStyle.mapComp}>
           <Marker onClick={onMarkerClick} />
          {/*
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow> */}
      </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAlBvWAu1kOdxdFkYqqIAw9VbtJ3Ztba-0',
})(MapComp);
