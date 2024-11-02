import { Home } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
            background: 'rgb(0,66,64)',
            background: 'linear-gradient(90deg, rgba(0,66,64,1) 0%, rgba(11,201,182,1) 50%, rgba(11,201,182,1) 100%)'
        }}>
            <Toolbar>
            <AutoAwesomeOutlinedIcon sx={{fontSize:'35px'}}/>
                <Typography variant='h4'id='pr' >Zara</Typography>
               
                <Link to="/ho"><Button variant='outlined' id="bu"> <Home/> </Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/ad"><Button variant='outlined' > <AddShoppingCartIcon/> </Button></Link>
                
             
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar