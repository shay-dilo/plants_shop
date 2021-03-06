import PaypalButton from './PaypalButton'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'

import {Link} from 'react-router-dom'
import { padding } from '@mui/system';
// import { green } from '@mui/material/colors';

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])
    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })
        setCart([...cart])
    }
    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
        }
    }

    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

        

    return (
        <>
<div>
    <div>
       
       </div>
        <div className="products">
           {
                cart.map(product => (
                    <Card padding="20px" className="product_card1"  key={product._id}>
                        <div className="delete" style={{position:'static'}}
                                        onClick={() => removeProduct(product._id)}>
                                        <DeleteForeverRoundedIcon/></div>
                            <CardMedia
                            padding="20px"
                            position="center"
                                component="img"
                                height="250"
                                image={product.images.url}
                                alt=""
                            />
                            <CardContent>
                            
                                <Typography variant="body2" color="text.secondary">
                                    <div className="footer1">
                                    <h3 className={"back"} style={{marginTop:'23px'}}>$ {product.price * product.quantity}</h3>
                                    <div className={"back"}>
                                        <button onClick={() => decrement(product._id)}><h1> - </h1></button>
                                        <b style={{fontSize:35}}>{product.quantity}</b>
                                        <button onClick={() => increment(product._id)}><h2> + </h2></button>
                                    </div>
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {product.title}
                                </Typography>
                                    <p>{product.description}</p>
                                </Typography>
                            </CardContent>
                    </Card>
                ))
            }
            
 <a style={{backgroundColor:'white', marginTop:'3px' , height:'90px',fontSize:'60px', color:'green'}} > Total={total}</a>
 <button className="products" style={{fontSize:'40px', marginTop:'30px' }} class="w3-border w3-round w3-green w3-large"><Link to="/OrderContinue" >
        <ArrowBackIcon style={{fontSize:'15px'}}/>Complete your order </Link></button>
      



        </div>
        </div>
        </>
    )
}

export default Cart

