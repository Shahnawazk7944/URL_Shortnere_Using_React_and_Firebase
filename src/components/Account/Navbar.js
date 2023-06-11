import React from 'react'
import {Button, Typography, AppBar, Toolbar,Box} from "@material-ui/core";


const Navbar = () => {
  return (
    <>
       <AppBar elevation={0} color='secondary' position='static'>
        <Toolbar>
            <Typography variant='h6'>UrLink</Typography>
            <Box ml="auto">
            <Button color="inherit">Profile</Button>
            <Button color="inherit">Logout</Button>
            </Box>
        </Toolbar>
       </AppBar>
       </>
  )
}

export default Navbar