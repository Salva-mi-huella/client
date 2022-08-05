import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useJsApiLoader,GoogleMap,Marker,Autocomplete,DirectionsRenderer, } from '@react-google-maps/api'
import { useRef, useState } from 'react'
import styles from './GoogleMaps.module.css'

  

export default function GoogleMaps({foundation, lat, lng}) {
  const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    })
  
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const center = { lat: parseFloat(lat), lng: parseFloat(lng) }
    
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()
  
    if (!isLoaded) {
      return <h1>Cargando</h1>
    }
  
    async function calculateRoute() {
      if (originRef.current.value === '' || destiantionRef.current.value === '') {
        return
      }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destiantionRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
    }
  
    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      originRef.current.value = ''
      destiantionRef.current.value = ''
    }
  
    return (

        <div>
            <h1 className={styles.title} > ¿Donde estamos? </h1>
            <div>
              {/* Google Map Box */}
              <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '600px', height: '400px' }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
                onLoad={map => setMap(map)}
              >
                <Marker position={center} />
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
             </div>



            <div className={styles.subContainer}>

              <div className={styles.route}> 
                <div className={styles.destination}>
                    <Autocomplete>
                      <input  defaultValue={`${foundation.address}, ${foundation.state}`} type='text' placeholder='Origen' ref={originRef}></input>
                    </Autocomplete>          
                    <Autocomplete>
                      <input type='text' placeholder='Destino'ref={destiantionRef}></input>
                    </Autocomplete>          
                </div>
                    <div>
                        <button className={styles.calculate} type='submit' onClick={calculateRoute}> Calcular Ruta</button>
                        <button className={styles.arrow} onClick={() => {
                            map.panTo(center)
                            map.setZoom(15)
                          }}><FaLocationArrow/></button>
                        <button className={styles.x} onClick={clearRoute}><FaTimes /></button>
                    </div>
                    
                      <div className={styles.travel}>
                        {distance && <div> <h3>Distancia: {distance}</h3></div>}
                        {duration && <div> <h3>Duración: {duration}</h3></div>}
                      </div>
              </div>
            </div>
        </div>
    )
  }