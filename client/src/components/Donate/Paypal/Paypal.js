import React, {useEffect, useRef, useState} from 'react'
import { Link,  } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux';
import styles from './Paypal.module.css'
import {postDonation} from '../../../redux/actions/'

export default function Paypal({amount, foundation, user}){
    
    let amount1 = function(){
        let newAmount = ''
       for(let i = 0; i < amount.length; i++){
              if(amount[i] !== '$' && amount[i] !== 'u' && amount[i] !== 's' && amount[i] !== 'd'){
                newAmount = newAmount.concat(amount[i])
              }
       } return parseInt(newAmount)
    }()

    const dispatch=useDispatch()
   const currency = useSelector(state=> state.currency)[1].casa.venta
   console.log(currency)




    const [donation, setDonation] = useState({
        amount: amount1,
        points: amount1*parseInt(currency)*5,
        method: 'paypal',
        foundationId: foundation.id,
        userId: user.id
    })

    const paypal = useRef()

    useEffect(() => {

        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        amount: {
                            // currency_code: "USD",
                            value: amount1
                        },
                        // description: foundation
                    }]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(donation)
                dispatch(postDonation(donation))
                // console.log("Succesful order")
                console.log(order)
            },
            onError: err => {
                console.log(err)
            },
            style: {
                // layout: 'vertical',
                // color: 'blue',
                shape: 'pill',
                // height: '50px'
            }
        }).render(paypal.current)
    }, [])
 
    return(
       <div className={styles.modal}>
        <div className={styles.paypal} ref={paypal}> </div>
       </div>
    )
}