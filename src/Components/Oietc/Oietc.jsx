import React from 'react';
import './Oietc.css';
import oietc from '../../../src/images/person-celebrating-graduation.webp';
import proxy from '../../images/degree5.jpg';
import Nonproxy from '../../images/degree4.jpg';

const Oietc = () => {
    return (
        <>
            <section className='container'>
                <hr></hr>



                <div class="card bg-dark text-white">
                    <img src={oietc} class="card-img" alt="..." />
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