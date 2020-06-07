import React from 'react';
import {FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

const customStyle = {
    formElement: {
        margin: '2rem',
        width: '50%',
        color: 'inherit'
        
    }
}
const GeoFencing = (props: any):JSX.Element => {
    return (
        <FormControl style={customStyle.formElement} className="formItem">
            <InputLabel id="selectField">Geo-Fencing</InputLabel>
            <Select labelId="selectField" value={props.inputGeoFencing} id="demo-simple-select-helper" onChange={props.onGeoFenceChange} >
                <MenuItem value={5000}>5km</MenuItem>
                <MenuItem value={10000}>10km</MenuItem>
                <MenuItem value={20000}>20km</MenuItem>
                <MenuItem value={30000}>30km</MenuItem>
                <MenuItem value={40000}>40km</MenuItem>
                <MenuItem value={50000}>50km</MenuItem>
            </Select>
            <FormHelperText>Select preferred Geo-Fencing Radius</FormHelperText>
        </FormControl>
    )
}

export default GeoFencing;
