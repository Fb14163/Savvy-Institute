import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Ged from '../Ged/Ged';
import Header from '../Header/Header/Header';
import Navbar from '../Header/Navbar/Navbar';
import Ielts from '../Ielts/Ielts';
import Oietc from '../Oietc/Oietc';
import SetBooking from '../SetBooking/SetBooking';
import bg from '../../images/shapes/shapes3.jpg';
import IeltsDevision from '../Ielts/IeltsDevision';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

const Home = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})`, width: "100%" }}>
                <Navbar></Navbar>
                <Header></Header>
                <Ged></Ged>
                <Ielts></Ielts>
                <IeltsDevision></IeltsDevision>
                <Oietc></Oietc>
                <SetBooking></SetBooking>
                <Login></Login>
                <Footer></Footer>


            </div>

        </>
    );
};

export default Home;