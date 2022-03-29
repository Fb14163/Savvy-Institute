import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    return (
        <>
            <section>

                <div data-aos="zoom-out-in" style={{ backgroundColor: "black", width: "100%", color: "white" }}>

                    <div className='container m-auto row'>

                        <div className='col-12 col-lg-3'>
                            <h3 style={{ backgroundColor: "yellowgreen", width: "70%", marginTop: "10px" }}>GED</h3>
                            <img src="" alt="" />
                            <ul>
                                <h4 style={{ color: "yellow" }}>5 Top Reasons to Get Your GED Certificate – and How to Do It Quickly</h4>
                                <li>Getting your GED certificate will open doors to jobs.</li>
                                <li>If you want to go to college, you must have a high school diploma or a GED certificate to get in.</li>
                                <li>If your GED scores are good, you also may be able to apply for scholarships and other sources of money to help pay for college classes or trade school training.</li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-3'>
                            <h3 style={{ backgroundColor: "yellowgreen", width: "70%", marginTop: "10px" }}>OIETC</h3>
                            <img src="" alt="" />
                            <ul>
                                <h4 style={{ color: "yellow" }}>What is OIETC?</h4>
                                <li>Oxford International English Test Centre delivers English tests and courses across a range of disciplines for use in either higher education or professionally. </li>
                                <h4 style={{ color: "yellow" }}>The English Language Level Test (ELLT)</h4>
                                <li>English Language Level Test (ELLT) is a four-step assessment taken to ascertain your current English language level and can be completed 100% online.  </li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-3'>
                            <h3 style={{ backgroundColor: "yellowgreen", width: "70%", marginTop: "10px" }}>IELTS</h3>
                            <img src="" alt="" />
                            <ul>
                                <h4 style={{ color: "yellow" }}>What is IELTS?</h4>
                                <li>The IELTS is a standardized and widely recognized English language assessment test for international education and global migration. It evaluates the English language proficiency of non-native English speakers, who wish to study in or migrate to countries, where English is the language of communication. </li>
                                <h4 style={{ color: "yellow" }}>How does IELTS work?</h4>
                                <li>Listening </li>
                                <li>Reading</li>
                                <li>Writing </li>
                                <li>Speaking</li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-3'>
                            <ul>
                                <h4 style={{ backgroundColor: "yellowgreen", width: "70%", marginTop: "10px" }}>Contact With Us</h4>
                                <li>Email:suman.urtrust@live.com </li>

                                <li>mobile:01765-768076 </li>
                                <li>Address:Savvy Model School,Amborkhana Mojumdari Sylhet.</li>

                            </ul>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Footer;