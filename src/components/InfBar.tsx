import React from 'react'
import { Container, AppBar, Toolbar, Button } from '@mui/material'

import '../styles/index.css'

const InfBar = () => {
  return (
    <AppBar style={{ marginTop:'88px', backgroundColor:'#E6E8E9', height: '64px', justifyContent:'center', color:'#535C67' }}>
        <Toolbar>
            <Container>
                <Button sx={{p:'0',mr:2}} variant='withoutTransform' color='inherit'>
                    All Products
                </Button>
                <Button sx={{p:'0',mr:2}} variant='withoutTransform' color='inherit'>
                    Package
                </Button>
                <Button sx={{p:'0',mr:2}} variant='withoutTransform' color='inherit'>
                    Drinkware
                </Button>
                <Button sx={{p:'0',mr:2}} variant='withoutTransform' color='inherit'>
                    Apparel
                </Button>
                <Button sx={{p:'0',mr:2}} variant='withoutTransform' color='inherit'>
                    Notebooks
                </Button>
                <Button sx={{p:'0',mr:2}} variant='withoutTransform' color='inherit'>
                    Backpacks
                </Button>
            </Container>
        </Toolbar>
    </AppBar>
    
  )
}

export default InfBar