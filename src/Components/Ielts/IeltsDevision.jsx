import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ieltsbnr from '../../images/shapes/banner1.jpg';
import card1 from '../../images/Ielts Card/GED.jpg';
import card2 from '../../images/Ielts Card/IELTS.jpg';

const IeltsDevision = () => {
    return (
        <>

            <section className='container ' >

                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className=''>
                    <img style={{ width: "100%", marginTop: "30px", boxShadow: "5px 7px 4px 3px #888888" }} src={ieltsbnr} alt="" />
                </div>
            </section>
            <section className='container mt-3 mb-5' style={{ backgroundColor: "#d2d6dd", borderRadius: "8px", boxShadow: "4px 5px 4px 3px #888888" }}>
                <div className='row mt-5 pb-3'>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className='col-12 col-lg-6'>

                        <img style={{ width: "100%", marginTop: "30px", borderRadius: "8px" }} src={card1} alt="" />

                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='col-12 col-lg-6'>

                        <img style={{ width: "100%", marginTop: "30px", borderRadius: "8px" }} src={card2} alt="" />

                    </div>
                </div>
            </section>


        </>
    );
};

export default IeltsDevision;