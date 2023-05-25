import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

  

  return (
    
    <div style={{ 
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ceyh_q5YrmgT1dWwHUIZ3eaNqhJCecGB-Q&usqp=CAU")`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      
     
    }}>
     
     <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          
          sx={{ marginTop: 40, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Hotel Management System</Typography>
        </Button>
      </Box>
     
      




      









      
    

    

    </div>
  );
};

export default Home;
