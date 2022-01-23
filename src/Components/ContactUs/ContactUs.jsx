import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className='container'>
                <form
                    style={{ backgroundColor: "grey", border: "1px solid grey" }}
                    action="https://formspree.io/f/moqrjkdb"
                    method="POST"
                    enctype="multipart/form-data"
                >
                    <hr></hr>
                    <label >
                        Your email:
                        <input style={{ width: "100%", marginBottom: "10px", borderRadius: "10px", border: "none" }} type="email" name="_replyto" />
                    </label>
                    <br></br>
                    <hr></hr>
                    <label style={{ color: "lightgreen" }}>
                        Your Passport:
                        <input style={{ width: "80%", marginBottom: "10px", borderRadius: "10px", border: "none" }} type="file" name="upload" />
                    </label>
                    <hr></hr>
                    <br></br>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
};

export default ContactUs;