import React from 'react';
import './Ged.css';
import ged from '../../../src/images/Graduation1.jpg';

const Ged = () => {
    return (
        <>
            <section className='container '>

                <div id="ged" style={{ width: '100%' }} className='row' >

                    <div className='col-12 col-lg-7 g-5'>
                        <h3>General Educational Development (GED)</h3>
                        <p className='ged-para'>
                            You may hear other meanings for GED such as Graduate Equivalency Degree or General Educational Diploma. However, GED traditionally stands for General Educational Development Test.

                            After graduating from high school, you will receive a diploma. A diploma is a document stating you’ve completed all the required courses to graduate. Some students in high school are close to finishing and getting a diploma, but don’t quite get there. In those cases, students can take a series of tests that will indicate whether or not they have a high school level of education. This is known as the GED test.

                        </p>
                        <button className='btn btn-info btn-ged'>
                            <a href="#">More Info</a>
                        </button>
                    </div>
                    <div className='col-12 col-lg-5 g-5 ged'>
                        <img style={{ width: '100%' }} src={ged} alt="GED" />
                    </div>

                </div>



            </section>
        </>
    );
};

export default Ged;