import React, {cloneElement, useState, useEffect, ReactNode, Children} from "react";

import "./Carousel.css"

interface CarouselProps {
    children: ReactNode;
}

const PAGEWIDTH: number = 1370
const Carousel: React.FC<CarouselProps> = ({children}) => {

    const [pages, setPages] = useState<ReactNode[]>([]);

    const [offset, setOffset] = useState<number>(0);

    const onClickMoveSlider_1 = (index: number) => {
        setOffset(-PAGEWIDTH * index);
    }
    const currentPage:number = Math.abs(offset/PAGEWIDTH)


    useEffect(() => {
        console.log(pages, offset);
        const updatedPages = Children.map(children, (child) => {
            return cloneElement(child as React.ReactElement, {
                style: {
                    minWidth: `${PAGEWIDTH}px`,
                    maxWidth: `${PAGEWIDTH}px`,
                    height: '100%'
                }
            });
        });
        setPages(updatedPages || []);

    }, [])


    return (
        <div className="slider-container-outside">
            <div className="window">
                <div className="all-page-container" style={{
                    transform: `translateX(${offset}px)`,
                    transition: "transform 0.3s ease-in-out",
                }}
                > {pages}
                </div>
            </div>
            <div>

                <div className="indicators">
                    {pages.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator-button  ${
                                currentPage === index ? "active" : ""
                            }`}
                            onClick={() => onClickMoveSlider_1(index)}
                        >

                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Carousel;