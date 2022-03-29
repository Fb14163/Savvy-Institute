import React from 'react';
import './Oietc.css';
import oietc from '../../../src/images/person-celebrating-graduation.webp';
import vdo from '../../../src/images/video/oietc.mp4';


const Oietc = () => {
    return (
        <>
            <section data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" data-aos="" className='container'>
                <hr></hr>



                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos="" className='container' class="card bg-dark text-white" id="#oietc">
                    <img src={oietc} class="card-img" alt="..." />
                    <video width="100%" height="240" controls>
                        <source style={{ width: '100%' }} src={vdo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <div class="card-img-overlay">

                        <button style={{ border: "none", borderRadius: "12px", color: 'red', backgroundColor: "white", padding: "6px", }}>OIETC Info</button>







                    </div>
                </div>











                <hr></hr>



            </section >
        </>
    );
};

export default Oietc;