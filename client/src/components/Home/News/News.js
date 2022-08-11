import React, {useState, useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel'
import { getAllNews } from '../../../redux/actions';
import NewsSlider from './NewsSlider';
import CampaignCard from './CampaignCard';
import styles from './NewsCard.module.css';



export default function ControlledCarousel({foundations}) {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    // const [expanded, setExpanded] = React.useState(false);
    const news = useSelector(state => state.news);
    const campaignNews = news.filter(n => n.campaign === true);
    const happyNews = news.filter(n => n.campaign === false);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        dispatch(getAllNews());
    }, [dispatch]);

    
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {campaignNews.map((n) => (
                    <Carousel.Item className={styles.caru25}>
                        <CampaignCard news={n} />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className={styles.containerNews}>
                <NewsSlider news={happyNews} />
            </div>
        </div>
        );

    }