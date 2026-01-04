import React, { forwardRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './MemoryBook.css';
import { motion } from 'framer-motion';

// Importing images with correct extensions from assets
import img1 from '../assets/01.jpeg';
import img2 from '../assets/02.jpg';
import img3 from '../assets/03.jpg';
import img4 from '../assets/04.jpeg';
import img5 from '../assets/05.jpeg';
import img6 from '../assets/06.jpeg';
import img7 from '../assets/07.jpeg';
import img8 from '../assets/08.jpeg';
import img9 from '../assets/09.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpg';

const Page = forwardRef((props, ref) => {
    return (
        <div className={`demoPage ${props.cover ? 'cover' : ''}`} ref={ref}>
            <div className={props.cover ? 'cover-content' : 'page-content'}>
                {props.children}
            </div>
        </div>
    );
});

const MemoryBook = () => {
    // Dynamic sizing for mobile responsiveness
    const [bookSize, setBookSize] = useState({ width: 350, height: 500 });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                // Mobile dimensions
                setBookSize({ width: 280, height: 400 });
            } else if (window.innerWidth < 768) {
                // Tablet dimensions
                setBookSize({ width: 300, height: 450 });
            } else {
                // Desktop dimensions
                setBookSize({ width: 350, height: 500 });
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // using explicit dimensions to ensure it renders correctly
    return (
        <section className="book-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Memory Album
            </motion.h2>

            <div className="book-container">
                <HTMLFlipBook
                    width={bookSize.width}
                    height={bookSize.height}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="flip-book"
                >
                    {/* Front Cover */}
                    <Page cover={true}>
                        <h1 className="cover-title">Teja's Memories</h1>
                        <p className="cover-subtitle">A collection of beautiful moments</p>
                        <p style={{ marginTop: '2rem' }}>2026</p>
                    </Page>

                    {/* Page 1 */}
                    <Page number={1}>
                        <img src={img1} alt="Memory" className="page-image" />
                        <p className="page-text">"The best times are always found when friends and family gather round."</p>
                        <span className="page-footer">Page 1</span>
                    </Page>

                    {/* Page 2 */}
                    <Page number={2}>
                        <img src={img2} alt="Memory" className="page-image" />
                        <p className="page-text">"Smile, it is the key that fits the lock of everybody's heart."</p>
                        <span className="page-footer">Page 2</span>
                    </Page>

                    {/* Page 3 */}
                    <Page number={3}>
                        <img src={img3} alt="Memory" className="page-image" />
                        <p className="page-text">"Every moment matters."</p>
                        <span className="page-footer">Page 3</span>
                    </Page>

                    {/* Page 4 */}
                    <Page number={4}>
                        <img src={img4} alt="Memory" className="page-image" />
                        <p className="page-text">"Making memories that last a lifetime."</p>
                        <span className="page-footer">Page 4</span>
                    </Page>

                    {/* Page 5 */}
                    <Page number={5}>
                        <img src={img5} alt="Memory" className="page-image" />
                        <p className="page-text">"Adventures fill your soul."</p>
                        <span className="page-footer">Page 5</span>
                    </Page>

                    {/* Page 6 */}
                    <Page number={6}>
                        <img src={img6} alt="Memory" className="page-image" />
                        <p className="page-text">"Happiness looks gorgeous on you."</p>
                        <span className="page-footer">Page 6</span>
                    </Page>

                    {/* Page 7 */}
                    <Page number={7}>
                        <img src={img7} alt="Memory" className="page-image" />
                        <p className="page-text">"Celebrating you today!"</p>
                        <span className="page-footer">Page 7</span>
                    </Page>

                    {/* Page 8 */}
                    <Page number={8}>
                        <img src={img8} alt="Memory" className="page-image" />
                        <p className="page-text">"Another year simpler, another year wiser."</p>
                        <span className="page-footer">Page 8</span>
                    </Page>

                    {/* Page 9 */}
                    <Page number={9}>
                        <img src={img9} alt="Memory" className="page-image" />
                        <p className="page-text">"Cheers to you!"</p>
                        <span className="page-footer">Page 9</span>
                    </Page>

                    {/* Page 10 */}
                    <Page number={10}>
                        <img src={img10} alt="Memory" className="page-image" />
                        <p className="page-text">"Wishing you the best."</p>
                        <span className="page-footer">Page 10</span>
                    </Page>

                    {/* Page 11 */}
                    <Page number={11}>
                        <img src={img11} alt="Memory" className="page-image" />
                        <p className="page-text">"Have a fantastic birthday."</p>
                        <span className="page-footer">Page 11</span>
                    </Page>

                    {/* Page 12 */}
                    <Page number={12}>
                        <img src={img12} alt="Memory" className="page-image" />
                        <p className="page-text">"Keep shining!"</p>
                        <span className="page-footer">Page 12</span>
                    </Page>

                    {/* Back Cover */}
                    <Page cover={true}>
                        <h1 className="cover-title">The End</h1>
                        <p className="cover-subtitle">...of the beginning</p>
                    </Page>
                </HTMLFlipBook>
            </div>
        </section>
    );
};

export default MemoryBook;
