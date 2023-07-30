import React from 'react'
import { useState } from 'react';
import { Drawer,ListItemIcon,ListItemText ,ListItemButton,List,IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Toggle = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
            <ListItemText primary="Home" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
            <ListItemText primary="Contact Us" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
            <ListItemText primary="About Us" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
            <ListItemText primary="Services" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
            <ListItemText primary="Login" />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
            <ListItemText primary="Sign in" />
            </ListItemIcon>
          </ListItemButton>
          
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
     <MenuIcon/>
      </IconButton> 
    
    </div>
  )
}

export default Toggle