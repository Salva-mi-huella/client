import * as React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { getFoundations, getCurrency } from '../../redux/actions/index.js';
import style from './Stepper.module.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import paypal from '../../assets/paypal.png'
import mercadoPago from '../../assets/mercadopago.png'
import Swal from 'sweetalert2';


const steps = [
  {
    label: 'Elegí la fundación',
    description: `Clickeá sobre la imagen de la fundación a la cual querés donar. Solo puedes elegir una fundación por donación.`,
  },
  {
    label: 'Elegí el método de pago',
    description:
      'Hacé click en tu método de pago favorito.',
  },
  {
    label: '¿Cuanto te gustaría donar?',
    description: `Elegí el importe que te gustaría donar. Al hacer click en finalizar, serás redirigo a la plataforma de pago.`,
  },
];

export default function VerticalLinearStepper({donation, setDonation, setCheckout, foundation, isAuthenticated, loginWithRedirect}) {


    const foundations = useSelector(state=> state.foundations)
    const dispatch = useDispatch()
    const [activeStep, setActiveStep] = React.useState(0);
  

  useEffect(()=>{
      dispatch(getFoundations())
      dispatch(getCurrency())
  },[])
  
  let amount1 = function(){
    let newAmount = ''
   for(let i = 0; i < donation.amount.length; i++){
          if(donation.amount[i] !== '$' && donation.amount[i] !== 'u' && donation.amount[i] !== 's' && donation.amount[i] !== 'd'){
            newAmount = newAmount.concat(donation.amount[i])
          }
   } return parseInt(newAmount)
}()

  const currency = useSelector(state=> state.currency)
  const conversion = currency.length>0 && parseInt(currency[1].casa.venta)*5
  const paws = (currency.length>0 &&donation.amount) && parseInt(currency[1].casa.venta)*5*amount1


  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (donation.amount.length) {
      Swal.fire({
        title: `¿Estás seguro de querer donar ${donation.amount} a la fundación ${foundation.name}?`,
        text: isAuthenticated ? `Ganarías ${paws} huellitas.` : '¡Registrate antes y sumá huellitas!',
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
        color: 'purple',
        padding: '2rem',
        width: '50rem',
        heigth: '50rem',

        showDenyButton: !isAuthenticated && true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: `Cancelar`,
        denyButtonText: `Registrarse`,
        
      }).then((result) => {
        if (result.isConfirmed) {
             setCheckout(true)
        } else if (result.isDenied) {
          loginWithRedirect()
        } else {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        } 
      })
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep === 2)  setDonation({...donation, amount: ''})
    if (activeStep === 1)  setDonation({...donation, method: ''})
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleOnClick = (e) => {
    e.target.name ? setDonation({...donation, [e.target.name]: e.target.alt}) : setDonation({...donation, amount: e.target.innerText})
  }

  const handleOnChange = (e) => {
  setDonation({...donation, amount: e.target.value})
  }


  return (
    <div> 
        <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
            <Step key={step.label}>
                <StepLabel>
                <h5 className={style.label}>{step.label}</h5>
                </StepLabel>
                <StepContent>
                <Typography color='common.white'>{step.description}</Typography>
                {step.label === 'Elegí la fundación' && 
                <div className={style.foundations}>
                {foundations.map(f=>(
                    <div key={f.id}>
                        <button 
                        // style={{ backgroundImage: `url(${f.images[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                         onClick={(e) => handleOnClick(e)}>
                          <img className={style.foundation} src={f.images[0]} alt={f.images[0]} name='foundation'></img>
                          <h5>{f.name}</h5>
                          </button>
                    </div> ))}
                </div>}
                {step.label === 'Elegí el método de pago' && 
                <div className={style.payment} >
                     <button onClick={(e) => handleOnClick(e)}><img className={style.paypal} src={paypal} alt='paypal' name='method'></img></button>
                     <button onClick={(e) => handleOnClick(e)}><img className={style.mp} src={mercadoPago} alt='mercadoPago' name='method'></img></button>
                </div>}
                {step.label === '¿Cuanto te gustaría donar?' && 
                  (donation.method === 'paypal' ?
                <div className={style.donate}>
                    <div>
                        <button onClick={(e) => handleOnClick(e)}>1usd</button>
                        <button onClick={(e) => handleOnClick(e)}>5usd</button>
                        <button onClick={(e) => handleOnClick(e)}>10usd</button>
                        <button onClick={(e) => handleOnClick(e)}>20usd</button>
                        <button onClick={(e) => handleOnClick(e)}>50usd</button>
                        <button onClick={(e) => handleOnClick(e)}>100usd</button>
                    </div>
                    <div className={style.amount}>
                        <label>Otro importe:</label>
                        <input onChange={handleOnChange} value={donation.amount} name='amount' type='number' placeholder='$0,00'></input>
                    </div> 
                        <span>{`1usd = $${currency.length>0 && currency[1].casa.venta} = ${conversion} huellitas`}</span>
                        {}
                  </div>
                    :
                <div className={style.donate}>
                    <div>
                      <button onClick={(e) => handleOnClick(e)}>$100</button>
                      <button onClick={(e) => handleOnClick(e)}>$200</button>
                      <button onClick={(e) => handleOnClick(e)}>$500</button>
                      <button onClick={(e) => handleOnClick(e)}>$1000</button>
                      <button onClick={(e) => handleOnClick(e)}>$2000</button>
                      <button onClick={(e) => handleOnClick(e)}>$5000</button>
                    </div>
                   <div className={style.amount}>
                    <label>Otro importe:</label>
                    <input onChange={handleOnChange} value={donation.amount} name='amount' type='number' placeholder='$0,00'></input>
                  </div> 
            </div> )
                }
                <Box sx={{ mb: 2 }}>
                    <div className={style.buttonStepper}>
                    <Button 
                        disabled={((donation.foundation === '' && index === 0) || (donation.method === '' && index === 1) || (donation.amount === '' && index === 2))}
                        variant="contained"
                        onClick={handleNext}
                        sx={{ color: 'azure', backgroundColor: '#9C27B0'}}
                        // sx={{ mt: 1, mr: 1 }}
                    >
                        {index === steps.length - 1 ?
                        // (donation.method === 'paypal' ? <Link to='/pago-paypal' className={style.link}>Finalizar</Link> : <Link to='/pago-mercado_pago' className={style.link}>Finalizar</Link>) 
                        'Finalizar'
                        : 'Continuar'}
                    </Button>
                    {index > 0 && (
                        <Button
                            // disabled={index === 0}
                            onClick={handleBack}
                            sx={{ color: 'azure', backgroundColor: 'transparent'}}

                        >
                            Atrás
                        </Button>
                    )}
                    </div>
                </Box>
                </StepContent>
            </Step>
            ))}
        </Stepper>
        {/* {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
            </Button>
            </Paper>
        )} */}

      
        </Box>
    </div>
    
  );
}