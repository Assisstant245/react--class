import React from 'react'
import { AppBar,Typography,Toolbar,Button,useTheme,useMediaQuery,Link} from '@mui/material';

import Toggle from './Toggle';


const Nav = () => {
    const theme=useTheme();
    console.log(theme);
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
  return (
    <div><AppBar>
    <Toolbar>{
      isMatch ? (
      <>
      <Typography>shope</Typography>
      <Toggle/>
      </>
      ):(
    <>
         <Typography variant='h5'>shope</Typography>
         
         <Link href="/" underline="hover" color="inherit"sx={{marginLeft: '40px'}}>
          {'Home'}
          </Link>
         <Link href="/About" underline="hover" color="inherit" sx={{marginLeft: '10px'}}>
          {'About Us'}
           </Link>
           <Link href="/Contact" underline="hover" color="inherit" sx={{marginLeft: '10px'}}>
          {'Contact Us'}
          </Link>
          <Link href="/Services" underline="hover" color="inherit" sx={{marginLeft: '10px'}}>
          {'Services'}
          </Link>
          

        {/* <Tabs>
        <Tab label="Home" value="1" />
        <Tab label="Services" value="2" />
        <Tab label="Contact Us" value="3" />
         <Tab label="About Us" value="3" />
         </Tabs>   */}
    <Button sx={{marginLeft: 'auto'}}variant="contained" color="success">sign in</Button>
    <Button sx={{marginLeft: '10px'}} variant="contained" color="success">login</Button>
    </>
      )
      
     
      }
    </Toolbar>
    </AppBar></div>
  )
}

export default Nav