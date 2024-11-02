import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography,Button ,Grid} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    
        var [user,changeuser] = useState([])
        useEffect(()=>{
            axios.get("https://fakestoreapi.com/products")
            .then((result)=>{
                changeuser(result.data)
                 console.log(user)
            })
        },[]
        )
       
  return (
    <div><br /><br /><br />
    <h1>PRODUCTS</h1>
    <Grid container spacing={5}>
       {user.map((val)=>{
                        return(
                            
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{maxWidth: 345 }}>
            <CardHeader id="id" avatar={
          <Avatar sx={{ bgcolor: "#0bc9b6" }} >
            Z
          </Avatar>
        } title={val.title} />
                
           
                <CardMedia  component="img"
        height="200"
        image={val.image}
        />
                <CardContent>
                
              
                <Typography >Price : ${val.price}</Typography>
                <Typography>Category : {val.category}</Typography>
         
   
                </CardContent>
                <CardActions sx={{color:"Grey"}}>
                <FavoriteIcon sx={{marginLeft:"5em"}}/><ShareIcon/>
                </CardActions>
           
        </Card>
  </Grid>
           )
        })}
        </Grid>
    </div>
  )
}

export default Home