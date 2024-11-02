import { TextField ,FormControl,InputLabel,Select,MenuItem, Button} from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div><br /><br /><br />
    <div id="fo"><h1>Add Product</h1>
        <TextField label="Product Name"></TextField><br /><br />
        <TextField label="Description" multiline
          maxRows={4} sx={{width:210}}></TextField><br /><br />
        <TextField label="Price"></TextField><br /><br />
        
        <FormControl sx={{width:210}} >
  <InputLabel >Category</InputLabel>
  <Select label="Category">
    <MenuItem >Mens Clothing</MenuItem>
    <MenuItem >Jewelery</MenuItem>
    <MenuItem >Electronics</MenuItem>
    <MenuItem >Women's clothing</MenuItem>
  </Select>
</FormControl><br /><br />
<Button variant='contained' color="inherit">Submit</Button>
</div>  
    </div>
  )
}

export default Add