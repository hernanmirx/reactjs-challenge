import { Container,Grid, Button, IconButton, FormControl, Select } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';

import '../styles/index.css'
import { borderRadius } from '@mui/system';

const Footer = () => {

    return (
        <div style={{width:'100%',paddingTop:'3em',paddingBottom:'3em',backgroundColor:'#E6E8E9'}}>
            <Container>
                <Grid container>
                        <Grid item xs={12} md={3}>
                            
                            <Button sx={{backgroundColor:'#CED0D3', color:'#848A92', borderRadius:'0px', marginRight:2}} variant='withoutTransform' color='inherit'>
                                Logo
                            </Button>
                            <p style={{color:'#6B737C'}}>We sell custom products for all your needs. Packs and bulk products that you will enjoy.</p>
                            <div style={{display:'flex'}}>
                                <PhoneIcon/>
                                <p style={{marginTop:'auto'}}>+1-202-555-0129</p>
                            </div>
                            <div style={{display:'flex', marginTop:'5px'}}>
                                <IconButton style={{ width:'32px',height:'32px', marginRight:'3px', color:'#fff', backgroundColor:'#535C67', borderRadius:'16px'}}><FaFacebookF/></IconButton>
                                <IconButton style={{ width:'32px',height:'32px', marginRight:'3px', color:'#fff', backgroundColor:'#535C67', borderRadius:'16px'}}><FaTwitter/></IconButton>
                                <IconButton style={{ width:'32px',height:'32px', marginRight:'3px', color:'#fff', backgroundColor:'#535C67', borderRadius:'16px'}}><FaLinkedinIn/></IconButton>
                                <IconButton style={{ width:'32px',height:'32px', marginRight:'3px', color:'#fff', backgroundColor:'#535C67', borderRadius:'16px'}}><FaYoutube/></IconButton>
                                <IconButton style={{ width:'32px',height:'32px', marginRight:'3px', color:'#fff', backgroundColor:'#535C67', borderRadius:'16px'}}><AiFillInstagram/></IconButton>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <p style={{marginTop:'auto',color:'#091625', fontSize:'16px', fontWeight:'bold'}}>Our company</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>About us</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>FAQ</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Partnerships</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Sustainability</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Bolg</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <p style={{marginTop:'auto',color:'#091625', fontSize:'16px', fontWeight:'bold'}}>How can we help</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Place a ticket</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Track your order</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Help center</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <p style={{marginTop:'auto',color:'#091625', fontSize:'16px', fontWeight:'bold'}}>Information</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Contact us</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Live chat</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Privacy</p>
                            <p style={{color:'#3A4451', fontSize:'15px'}}>Terms of use</p>
                        </Grid>
                        <Grid style={{marginTop:'6em'}} item xs={12}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <p style={{color:'#6B737C'}}>© 2022 Customer Products. All rights reserved.</p>
                                </Grid>
                                <Grid item xs={12} md={6} textAlign='right'>
                                    <FormControl variant='standard' sx={{mr:5}}>
                                        <div style={{display:'flex'}}>                                        
                                          <label htmlFor="country" style={{marginTop:'0.8em',marginRight:'5px'}}>Region:</label>
                                          <Select value="0" style={{marginTop:'10px'}} id="country">
                                            <option value="0">Unided States</option>
                                          </Select>
                                        </div>
                                    </FormControl>
                                    <FormControl variant='standard' sx={{m:0}}>
                                        <div style={{display:'flex'}}>                                        
                                          <label htmlFor="country" style={{marginTop:'0.8em',marginRight:'5px'}}>Language:</label>
                                          <Select value="0" style={{marginTop:'10px'}} id="country">
                                            <option value="0">English</option>
                                          </Select>
                                        </div>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer