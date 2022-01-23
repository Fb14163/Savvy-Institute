import React from 'react';
import banner1 from '../../../images/Savvy Banner.png';
// import banner2 from '../../../images/IELTS.jpg';
// import banner3 from '../../../images/GED.jpg';

const Header = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} class="d-block w-100 " alt="..." />
                    </div>
                    {/* <div class="carousel-item">
                        <img src='{banner2}' class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src='{banner3}' class="d-block w-100" alt="..." />
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Header;