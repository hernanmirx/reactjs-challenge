import React from 'react'
import { Container, AppBar, Toolbar, Button, IconButton, Typography, Stack } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../styles/index.css'



const SupBar = () => {
    
    return (
    
    <AppBar style={{ backgroundColor:'#091625', height: '88px', justifyContent:'center' }}>
        <Toolbar>
            <Container style={{display:'flex'}}>
                <Button sx={{backgroundColor:'#CED0D3', color:'#848A92', borderRadius:'0px', marginRight:2}} variant='withoutTransform' className='buttons' color='inherit'>
                    Logo
                </Button>
                <Stack width='100%' textAlign='center' justifyContent='center'>
                    <input type="text" className='search' placeholder="Search Products" />
                </Stack>
                <Stack width='100%' alignItems='end' justifyContent='center'>
                    <div style={{display:'flex',width:'50%'}}>
                        <Button style={{width:'100%', textTransform:'none'}} aria-label='Sign In' color='inherit'>
                            <PersonOutlineOutlinedIcon/>
                            Sign In
                        </Button>
                        <Button style={{width:'100%', textTransform:'none'}} aria-label='Cart' color='inherit'>
                            <ShoppingBagOutlinedIcon/>
                            Cart
                        </Button>

                    </div>
                </Stack>
            </Container>
        </Toolbar>
    </AppBar>
  )
}

export default SupBar