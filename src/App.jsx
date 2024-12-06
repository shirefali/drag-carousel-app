import './index.css';
import { motion } from 'framer-motion';
import images from './images';
import { useEffect, useState, useRef } from 'react';

function App() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();
    useEffect(() => {
        const scrollWidth = carouselRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
    }, []);
    return (
        <section>
            <motion.div
                className="carousel"
                ref={carouselRef}
                whileTap={{ cursor: 'grabbing' }}
            >
                <motion.div
                    className="inner-carousel"
                    drag="x"
                    dragConstraints={{
                        right: 0,
                        left: -width,
                    }}
                >
                    {images.map((image) => {
                        return (
                            <motion.div className="item" key={image}>
                                <img
                                    src={image}
                                    alt="carousel-image"
                                    loading="lazy"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default App;
