import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

import Carousel from './Carousel';
import './Carousel.css';

interface SlideData {
  image: string;
  title: string;
  description: string[];
  price: string | number;
}

const Slider: React.FC = () => {
  const [slides, setSlides] = useState<ReactNode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSlides = async () => {
    try {
      const response = await axios.get<SlideData[]>(
        'https://67448498b4e2e04abea28987.mockapi.io/Plomba',
      );
      const data = response.data;

      console.log('success');
      // position: relative;
      // width: 500px;
      // left: 222px;
      const slideElements = data.map((slide, index) => (
        <div className="">
          <div className="item" key={index}>
            <div className="slider-container  relative w-[500px] left-[222px]">
              <div className="relative">
                <h2>{slide.title}</h2>
                <div className="mt-[45px] ml-[30px]">
                  <div>
                    <ul className="slider-description">
                      {slide.description.map((item, inx) => (
                        <li key={inx} className="list-item text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="button-slider mt-[30px]">{slide.price}</button>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="mt-[90px]  max-w-[948px] min-w-[500px] ml-[-107px]"
                src={slide.image}
              />
            </div>
          </div>
        </div>
      ));
      setSlides(slideElements);
    } catch (error) {
      console.error('Ошибка в slide', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  if (isLoading) {
    return <div>Loading, wait, they don't love you like i love you</div>;
  }
  return <Carousel>{slides}</Carousel>;
};

export default Slider;
