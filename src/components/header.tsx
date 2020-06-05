import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const customStyles = {
    header: {
        background: 'hsl(210, 15%, 35%)'
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