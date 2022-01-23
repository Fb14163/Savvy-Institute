import React from 'react';
import ieltsbnr from '../../images/shapes/banner1.jpg';
import card1 from '../../images/Ielts Card/01.png';
import card2 from '../../images/Ielts Card/02.png';

const IeltsDevision = () => {
    return (
        <>

            <section className='container'>

                <div className=''>
                    <img style={{ width: "100%", marginTop: "30px" }} src={ieltsbnr} alt="" />
                </div>

                <div className='row'>
                    <div className='col-12 col-lg-6'>

                        <img style={{ width: "100%", marginTop: "30px", borderRadius: "8px" }} src={card1} alt="" />

                    </div>
                    <div className='col-12 col-lg-6'>

                        <img style={{ width: "100%", marginTop: "30px", borderRadius: "8px" }} src={card2} alt="" />

                    </div>
                </div>

            </section>

        </>
    );
};

export default IeltsDevision;