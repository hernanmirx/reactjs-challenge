import { useState, useEffect } from 'react'
import { Container, Box, FormControl, FormLabel, Select, MenuItem, Button, IconButton, Grid } from '@mui/material'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import '../styles/index.css'

const Cart = () => {
    const [ products, setProducts ] = useState([
        { id:1,
          name: "Basic T-shirt",
          price: 13.50,
          quantity: 5
        },
        { id:2,
          name: "Woman bottle",
          price: 36.50,
          quantity: 10
        },
        { id:3,
          name: "Unisex short sleeve T-shirt",
          price: 10.00,
          quantity: 8
        }
      ])
    const [ total, setTotal ] = useState(0)
    const [ items, setItems ] = useState(0)
    const [ quantities, setCuantities ] = useState([])

    useEffect(() => {
      const generateQ = () => {
        let numbers:any = []
        for (let i = 1; i <= 100; i++) {
          numbers.push(i)
        }
        setCuantities(numbers)
      }
      generateQ()
    },[])

    useEffect(() => {
      const calculateTotal = () => {
        let auxTotal=0;
        let itemsCounter=0;
        products.forEach(element => {
          auxTotal+=element.price*element.quantity;
          if (element.quantity>0)
          {
            itemsCounter++;
          }
        })
        setTotal(auxTotal)
        setItems(itemsCounter)
      }
      calculateTotal()

    },[products])

    const setQuantity = (id:any,q:any) => {
      let rData = [...products]
      rData.forEach(element => {
        if (element.id===id)
        {
          element.quantity=q;
        }
      });
      setProducts(rData)
    }
    const removeItem = (id:any) =>{
      let rData = [...products]
      rData.forEach(element => {
        if (element.id===id)
        {
          element.quantity=0;
        }
      });
      setProducts(rData)
    }


    return (
        <div className='mainCart'>
          <Container style={{marginTop:'160px'}}>
            <Grid container>
              <Grid item xs={12} md={9}>
                <h2 style={{marginTop:'auto'}}>Your cart <span className='comment'>({items})</span></h2>
                    {
                      products.map((item,i) => (
                        item.quantity>0 &&
                          <div key={i}>
                            
                            <Grid container>
                              <Grid item md={6}>
                                <div className='containerProduct'>
                                  <Box className='boxImage'></Box>
                                  <div>
                                    <div style={{marginLeft:'8px'}}>
                                      <p className='fontBold18'>{item.name}</p>
                                      <FormControl variant='standard' sx={{m:0}}>
                                        <div style={{display:'flex'}}>                                        
                                          <label htmlFor={`sel${item.id}`} style={{marginTop:'0.8em',marginRight:'5px'}}>Quantity:</label>
                                          <Select style={{marginTop:'10px'}} id={`sel${item.id}`} value={item.quantity} onChange={(e) => setQuantity(item.id,e.target.value)}>
                                          {
                                            quantities.map((quantity,i) => (<MenuItem key={i} value={quantity}>{quantity}</MenuItem>))
                                          }
                                          </Select>
                                        </div>
                                      </FormControl>
                                    </div>
                                    <div style={{width:'100%', margin:'auto', padding:'0'}}>
                                      <IconButton
                                        onClick={()=>removeItem(item.id)}
                                        size='small'
                                        color='inherit'
                                        
                                      ><DeleteForeverOutlinedIcon/>Remove</IconButton>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item md={6}>
                                <p className='textRight'>${item.price}</p>
                                <p className='textRight'>Total: ${item.price*item.quantity}</p>
                              </Grid>
                            </Grid>
                            <hr className='divider'/>
                          </div>
                      )
                      )
                    }
              </Grid>
              <Grid item xs={12} md={3}>
                <Container>
                  <h2 style={{marginTop:'auto'}}>Order summary</h2>
                  <Grid container>
                    <Grid item md={6}>
                      <p className='comment'>Number of items</p>
                    </Grid>
                    <Grid item md={6}>
                      <p className='comment textRight'>{items}</p>
                    </Grid>
                  </Grid>
                  <hr className='divider'/>
                  <Grid container>
                    <Grid item md={6}>
                      <p className='fontBold18'>Total:</p>
                    </Grid>
                    <Grid item md={6}>
                      <p className='fontBold24 textRight'>${total}</p>
                    </Grid>
                  </Grid>
                  <Button 
                    variant='dark'
                    fullWidth 
                  >Proceed to Checkout</Button>
                  <Button 
                    variant='outlineDark'
                    fullWidth
                    style={{marginTop:'1em'}}
                  >Continue shopping</Button>
                </Container>
              </Grid>    
            </Grid>
          </Container>
        </div>
    )
}

export default Cart