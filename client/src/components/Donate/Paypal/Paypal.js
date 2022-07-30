import React, {useEffect, useRef, useState} from 'react'
import { Link,  } from 'react-router-dom'
import {  useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './Paypal.module.css'
import {postDonation, updateUser} from '../../../redux/actions/'
import Swal from 'sweetalert2'
import dog from '../../../assets/dog.png'

export default function Paypal({amount, foundation, user}){
    
    let amount1 = function(){
        let newAmount = ''
       for(let i = 0; i < amount.length; i++){
              if(amount[i] !== '$' && amount[i] !== 'u' && amount[i] !== 's' && amount[i] !== 'd'){
                newAmount = newAmount.concat(amount[i])
              }
       } return parseInt(newAmount)
    }()

    const [show, setShow] = useState(true)


   const dispatch=useDispatch()
   const history = useHistory()
   const currency = useSelector(state=> state.currency)[1].casa.venta
   const points =  amount1*parseInt(currency)*5
   const newPoints = user.points + points

    const [donation, setDonation] = useState({
        amount: amount1,
        points: points,
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
                setShow(false)
                const order = await actions.order.capture()
                dispatch(postDonation(donation))
                dispatch(updateUser({points:newPoints}, user.email))
                Swal.fire({
                    title: '¡Tu donación ha sido exitosa!',
                    text: 'Gracias por ayudarnos a seguir salvando huellas',
                    imageUrl: dog,
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: 'Custom image',
                    position: 'center',
                    width: '40rem',
                    height: '55rem',
                    icon: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Volver al Home',
                    confirmButtonColor: 'purple',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown',
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                  }).then((result) => {
                    if (result.isConfirmed) {
                            history.push('/home')
                        }})
            },
            onError: err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo ha salido mal, revisa tus datos.',
                    // footer: '<a href="">Why do I have this issue?</a>'
                  })
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
       <div className={show ? styles.modal : styles.success}>
        <div className={show ? styles.paypal : styles.notShow} ref={paypal}> </div>
       </div>
    )
}