import React, {useState} from 'react';
import slider1 from '../../asset/img/slider41.jpg';
import slider2 from '../../asset/img/slider42.jpg';
import './Banner.scss'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  import Button from '../UI/Button/Button'

const items = [
    {
      src: slider1,
      white: 'white',
      key: 1
     
    },
    {
    src: slider2,
    white: '',
    key: 1
      
    }
  ];
const Banner = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      };

      const slides = items.map((item) => {
        return (
          <CarouselItem className='item'
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.altText}
          >
            <img src={item.src} alt={item.altText} />
            <div>
                <h1>If You Are Looking <br />
                    For Great Taste </h1>
                    <span className={item.white}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor .  
                sollicitudin,<br /> lorem quis bibendum auctor, nisi elit consequat ipsum, nec <br />↵sagittis sem nibh id elit.</span> <br />
                <Button>Click Here</Button>
            </div>
           
          </CarouselItem>
        );
      });
      
      return (
        <Carousel
            className='box-carousel'
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl className='carousel-control-next' direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      );
    
};

export default Banner;