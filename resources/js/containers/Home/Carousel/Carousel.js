import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';

import FirstImage from '../../../../../public/images/Layer_4_copy.png';
import SecondImage from '../../../../../public/images/482f2140-4473-42e8-85d2-0953eaf84d88.png';
import ThirdImage from '../../../../../public/images/onlinestudents.png';
import FourthImage from '../../../../../public/images/business-bg-3.png';
import BlurImage from '../../../../../public/images/SRTP-abstract-background-19.png';

const items = [
    {
        src: FirstImage,
        altText: 'Slide 1',
    },
    {
        src: SecondImage,
        altText: 'Slide 2',
    },
    {
        src: ThirdImage,
        altText: 'Slide 3',
    },
    {
        src: FourthImage,
        altText: 'Slide 4',
    }
];

const homeCarousel = (props) => {
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
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className="h-100"
            >
                <div className="h-100" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(' + item.src + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* <div className="h-100" style={{ backgroundImage: 'url(' + BlurImage + ')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: .7, filter: 'brightness(-58%)' }}></div> */}
                    <div className="h-100 bg-dark-gradient" style={{ opacity: .7 }}></div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="h-100 carousel-fade"
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} className="d-flex flex-column align-items-center" onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="btn btn-dark" />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="btn btn-black rounded-right-0" />
            {props.children}
        </Carousel>
    );
}

export default homeCarousel;
