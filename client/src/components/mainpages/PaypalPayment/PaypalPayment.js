import PaypalButton from '../cart/PaypalButton'

// import { textAlign } from "@mui/system";
import emailjs from "emailjs-com";
import React, {useContext, useState, useEffect}  from 'react';
// import backround1 from './icon/backround4.jpg'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";




toast.configure()



export default function PaypalPaymenT() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const history = useHistory();

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)
            setTotal(total)
        }
        getTotal()
    },[cart])

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;
        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        toast.success("You have successfully placed an order.", {
            position: toast.POSITION.TOP_CENTER
          })
          history.push("/products");
    }

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }
 
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_8kox9e8', 'template_6er0785', e.target, 'user_5NUdxookYXupMbgZBCLTF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    history.push("/products");
    }


   
    return(
    <div> 
        <div   >
            <PaypalButton  
            total={total}
            tranSuccess={tranSuccess} />
               
         
        </div>
               
                
        
   
    </div>
    )
}

