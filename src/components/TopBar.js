
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors'

const topBarColor = grey[50]

export default function TopBar() {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static"sx={{backgroundColor: topBarColor}}>
                    <Toolbar>
                        <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"/>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                
                            </Typography>
                            <Button color="inherit">Login</Button>
                            <Button variant="contained" color="success" sx={{borderRadius: 16}}>Sign-Up</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}