import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const customStyles = {
    footer: {
        bottom: 0,
        background: 'hsl(210, 15%, 35%)'
    },
    copyright: {
        margin: '0 auto'
    }
}

const Footer = ():JSX.Element => 
    <AppBar component="footer" position='sticky' style={customStyles.footer}>
        <Toolbar>
            <Typography style={customStyles.copyright}>copyright, &copy; 2020</Typography>
        </Toolbar>
    </AppBar>

export default Footer;
