import React from 'react';

const SetBooking = () => {
    return (
        <>
            <section className='container'>

                <div>
                    <form
                        style={{ backgroundColor: "", border: "1px solid grey", alignItems: "center", justifyContent: "center" }}
                        action="https://formspree.io/f/moqrjkdb"
                        method="POST"
                        enctype="multipart/form-data"
                    >
                        <h style={{ backgroundColor: "black", color: "white", borderRadius: "8PX", padding: "5px", border: "1px solid grey", alignItems: "center", justifyContent: "center" }}>Please Confirm Your Seat</h>
                        <hr></hr>
                        <label style={{ width: "50%", backgroundColor: "black", color: "white", borderRadius: "8PX", padding: "5px", border: "1px solid grey", alignItems: "center", justifyContent: "center" }}>
                            Your email:
                            <input style={{ width: "100%", marginBottom: "10px", border: "1px solid grey", borderRadius: "10px", border: "none", backgroundColor: "white" }} type="email" name="_replyto" />
                        </label>
                        <hr></hr>
                        <label style={{ width: "50%", backgroundColor: "black", color: "white", borderRadius: "8PX", padding: "5px", border: "1px solid grey", alignItems: "center", justifyContent: "center" }}>
                            Your Phone:
                            <input style={{ width: "100%", marginBottom: "10px", border: "1px solid grey", borderRadius: "10px", border: "none", backgroundColor: "white" }} type="email" name="_replyto" />
                        </label>
                        <hr></hr>
                        <br></br>
                        <label style={{ width: "50%", backgroundColor: "black", color: "white", borderRadius: "8PX", padding: "5px", border: "1px solid grey", alignItems: "center", justifyContent: "center" }}>
                            Your Passport:
                            <input style={{ width: "80%", marginBottom: "10px", borderRadius: "10px", border: "none", backgroundColor: "white" }} type="file" name="upload" />
                        </label>
                        <hr></hr>
                        <br></br>
                        <button style={{ width: "30%", border: "none", borderRadius: "8px", backgroundColor: "orange", marginBottom: "80px", }} type="submit">Send</button>
                    </form>
                </div>
                <div>
                    <h1></h1>
                </div>
            </section>
        </>
    );
};

export default SetBooking;