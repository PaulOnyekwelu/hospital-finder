import React from 'react';
import { Box, Toolbar, Typography } from '@material-ui/core';

const customStyles = {
    footer: {
        background: 'hsl(210, 10%, 82%)',
        bottom: '0',
        left: '0',
        width: 'inherit',
        height: '7%'
    },
    copyright: {
        margin: '0 auto'
    }
}

const Footer = ():JSX.Element => 
    <Box component="footer" position="absolute" style={customStyles.footer} className='footer'>
        <Toolbar>
            <Typography style={customStyles.copyright}>copyright, &copy; 2020</Typography>
        </Toolbar>
    </Box>

export default Footer;
