import React from 'react';
import {FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField } from '@material-ui/core';

const customStyle = {
    formSection: {
        display: 'flex',
        width: 'inherit',
        margin: '0 auto',
        justifyContent: 'space-around',
        color: 'white'
    },
    formElement: {
        margin: '2rem',
        width: '50%',
        color: 'inherit'
        
    },
    inputElement: {
        borderColor: 'black'
    }
}

const SearchField = (): JSX.Element => {
    return(
        <section >
            <form noValidate autoComplete="off" style={customStyle.formSection}>
                <FormControl style={customStyle.formElement}>
                    <InputLabel id="demo-simple-select-helper-label">Geo-Fencing</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    >
                        <MenuItem value={10}>5km</MenuItem>
                        <MenuItem value={20}>10km</MenuItem>
                        <MenuItem value={30}>20km</MenuItem>
                        <MenuItem value={30}>40km</MenuItem>
                        <MenuItem value={30}> {`>50km`}</MenuItem>
                    </Select>
                    <FormHelperText>Select preferred Geo-Fencing Radius</FormHelperText>
                </FormControl>
                <FormControl style={customStyle.formElement}>
                    <TextField id="standard-basic" label="Enter Location" style={{color: 'white'}} />
                </FormControl>
            </form>
        </section>
    )
}

export default SearchField;