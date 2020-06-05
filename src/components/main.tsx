import React, {useState} from 'react';
import {Container, Box} from '@material-ui/core';

import SearchField from './searchField';
import SearchResult from './searchResult';
import MapComp from './mapComp';

const customStyle = {
    mainContainer: {
        width: '90%',
        height: '80%',
        overflow: 'hidden'
    }
}

const Main = (props: any): JSX.Element => {
    // let [latitude, setLatitude] = React.useState(-33.7560119)
    // let [longitude, setLongitude] = React.useState(150.6038367)
    // let [address, setAddress] = React.useState('')
    const [showResult, setShowResult] = useState(false);
    return(
        <Container style={customStyle.mainContainer}>
            <SearchField />
            {
                showResult ? <SearchResult /> : null
            }
            <MapComp />
        </Container>
    )
}

export default React.forwardRef(Main);