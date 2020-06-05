import React from 'react';
import { AppBar,Toolbar, IconButton, Typography, TextField } from '@material-ui/core';

const Header = () => 
    <React.Fragment>
        <AppBar position="static" style={{background:"green"}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer">
                </IconButton>
                <Typography variant="h6" noWrap>
                    HOSPITAL-FINDER
                </Typography>
                <TextField id="standard-basic" label="Standard" />
            </Toolbar>
        </AppBar>
    </React.Fragment>

export default Header;