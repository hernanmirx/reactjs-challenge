import { useState } from 'react';
import { Container, Box, FormControl, FormLabel, Select, MenuItem, Button, IconButton, Grid } from '@mui/material'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import '../styles/index.css'

const Also = () => {
    const [ products, setProducts ] = useState([
        { id:1,
            name: "Unisex short sleeve T-shirt",
            price: "$10 - $24"
        },
        { id:2,
            name: "Unisex short sleeve T-shirt",
            price: "$10 - $24"
        },
        { id:3,
            name: "Unisex short sleeve T-shirt",
            price: "$10 - $24"
        },
        { id:4,
            name: "Unisex short sleeve T-shirt",
            price: "$10 - $24"
        }
    ])

    return (
        
          <Container style={{marginTop:'20px'}}>
            <h2>You might also like</h2>
            <Grid container>
                {
                    products.map((item,i)=>(
                    <Grid key={i} item xs={6} md={3} p={1} mb={30}>
                        <Box sx={{
                            width:'100%',
                            maxWidth: 260,
                            height:'200%',
                            maxHeight: 260,
                            backgroundColor: '#E6E8E9',
                            '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            },
                            }}>
                        </Box>
                        <p style={{fontWeight:'bold'}}>{item.name}</p>
                        <p>{item.price}</p>
                    </Grid>    
                    ))
                }
            </Grid>
          </Container>
    )
}

export default Also