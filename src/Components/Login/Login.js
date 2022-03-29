import React from 'react';

const Login = () => {
    return (
        <>

            <h3 className='mt-4' >Please Sign Up</h3>

            <form class="row g-3 w-50 mx-auto pb-3" >
                <div class="col-md-3" >
                    <label for="inputEmail4" class="form-label" id="login">Name</label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-3" >
                    <label for="inputEmail4" class="form-label" id="login">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>





                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
            </form>

        </>
    );
};

export default Login;