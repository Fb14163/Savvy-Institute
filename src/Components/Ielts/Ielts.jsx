import React from 'react';
import './Ielts.css';
import eng from '../../images/degree1.jpg';
import Oietc from '../Oietc/Oietc';

const Ielts = () => {
    return (
        <>

            <section style={{ marginTop: '30px' }} className='container'>

                <div id="ielts" style={{ width: '100%' }} className='row' >

                    <div className='col-12 col-lg-5 g-5 ged'>
                        <img style={{ width: '100%', borderRadius: "8px" }} src={eng} alt="GED" />
                    </div>

                    <div className='col-12 col-lg-7 g-5'>



                        <h3>International English Language Testing System (IELTS)</h3>
                        <p className='ged-para'>
                            The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA.
                        </p>

                        <button style={{ border: "none", borderRadius: "8px", backgroundColor: "goldenrod" }} className='btn btn-info btn-ged'>
                            <a href="#">More Info</a>
                        </button>
                    </div>

                </div>

            </section>

        </>
    );
};

export default Ielts;