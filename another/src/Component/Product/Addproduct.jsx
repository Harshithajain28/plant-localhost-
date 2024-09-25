import React, { useState } from 'react'
import Button from '@mui/material/Button';
import '../..'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Addproduct() {
  let initialValue;
  if(localStorage.getItem("plant")===null){
    initialValue=[] 
  }else{
    initialValue=JSON.parse(localStorage.getItem("plant"))
  }

  const[value, setValue]=useState(initialValue);
  const[insert,setInsert]=useState({});

  const handleChange =(e)=>{
    setInsert({
      ...insert,
      [e.target.name]:e.target.value
    });
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    const newPlantId=value.length===0 ? 1:value[value.length-1].p_id+1;
    const details={
      p_id:newPlantId,
      ...insert
    };
    const updatedValue=[...value,details]; //corrected line
    setValue(updatedValue); //updated state with the new array
    localStorage.setItem("plant",JSON.stringify(updatedValue));//stores updated aRRAY IN local storage

  }
  return (
    <div className='allprod'>
         <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      style={{
        border:"1px solid pink",
        width:"400px",
        justifyContent:"center",
        marginLeft:"400px",
        background:" linear-gradient(180deg, rgb(105, 168, 105),white 60%)",
        borderRadius:"10px"
      }}
    >
      <h2 style={{fontFamily:"Times New Roman", fontSize:"40px"}}>Inserting form</h2>
      <div className='all-text-field'>
        <TextField
        required
          className="outlined-required"
           label="Product Name"
          placeholder="Product Name*"

        />
        <br />
        
        <TextField
        required
          className="outlined-required"
           label="Availability"
          placeholder="Availability"

        />
        <br />
        <TextField
        required
          className="outlined-number"
          type="number"
          placeholder="Price*"
          
           
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <br />
        <TextField
        required
        className='outlined-description'
        label="Description"
        placeholder='Description*'
        style={{
        }}
        />
<br />
<TextField
        required
        className='outlined-description'
        label="Image Link"
        placeholder='Image Link*'
        style={{
        }}
        />
<Button variant="contained" disableElevation style={{width:"220px"}}>
  Sumbit
</Button>
        
      </div>
    </Box>
    </div>
  )
}

