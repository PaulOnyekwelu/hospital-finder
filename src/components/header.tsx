import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const customStyles = {
    header: {
        background: 'rgb(63,81,181)',
        height: '7%',
        width: 'inherit'
    },
    brandName: {
        margin: '0 auto'
    }
}

const Header = (): JSX.Element => 
    <AppBar position="static" style={customStyles.header}>
        <Toolbar>
            <Typography variant="h6" noWrap style={customStyles.brandName} >
                HOSPITAL-FINDER
            </Typography>
        </Toolbar>
    </AppBar>

export default Header;