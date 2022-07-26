import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import styles from './Paypal.module.css'

export default function Paypal({amount, foundation}){
    
    let amount1 = function(){
        let newAmount = ''
       for(let i = 0; i < amount.length; i++){
              if(amount[i] !== '$' && amount[i] !== 'u' && amount[i] !== 's' && amount[i] !== 'd'){
                newAmount = newAmount.concat(amount[i])
              }
       } return newAmount
    }()

    console.log(amount1)

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
                        description: foundation
                    }]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
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