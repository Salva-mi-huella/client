import React, {useState}  from 'react'
import styles from './Carousel.module.css';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../images/rabbit.jpg'
import img2 from '../../images/dolphin.jpg'
import img3 from '../../images/rottweiler.jpg'


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
        className={styles.images}
        src={img1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className={styles.images}
        src={img2}
        alt="Second slide"
        />
        
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className={styles.images}
        src={img3}
        alt="Third slide"
        />
        
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        );

    }