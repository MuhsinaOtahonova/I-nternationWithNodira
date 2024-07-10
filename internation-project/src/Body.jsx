import 'bootstrap/dist/css/bootstrap.min.css';
function Body() {
    return (
        <div className="main ">
            <div className="container d-flex justify-content-end">
            <div className="signup-content-box ">
                    <h2 className='fs-3 d-none d-md-block'>Sign up for your first lesson!</h2>
                    <p className='d-none d-md-block'>Leave a request and our manager will contact you.</p>
                    <input className='d-none d-md-block' type="text" name="name" id="name" placeholder='Name'/>
                    <input  type="tel" name="name" id="name" className='mt-3 d-none d-md-block'/>
                    <button type='submit' className='button mt-3'><b>sign up</b></button>
                </div>
            </div>
            </div>
    );
}

export default Body