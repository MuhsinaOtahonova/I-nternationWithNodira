import 'bootstrap/dist/css/bootstrap.min.css';
import { PiStudentBold } from "react-icons/pi";
import { LiaIdCardAltSolid } from "react-icons/lia";

function Login2() {
    
    return (
        <div className="container login">
            <div className="row login-content d-flex justify-content-between">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div className="choose-profile">
                        <h2 className='fs-1'>Student</h2>
                        <p className="text mt-4">Do your homework on your computer</p>
                        <div className="options d-flex flex-column">
                            <div className="option-box d-flex justify-content-between mt-5">
                                <input className='option-box' type="text" name='tel' id="tel"  placeholder='+998 90 009 02 32'/>
                            </div>
                            <div className="option-box d-flex justify-content-between mt-3">
                                <input className='option-box' type="password" name='password' placeholder='passrowd' id="password"/>
                            </div>
                            <button className='login-button mt-4' type='submit'><b>Next</b></button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="login-photo">
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login2
/* <nav>
<a href="#"><img src="src/assets/image-removebg-preview.png" alt="logo" width={190} className='login-logo' /></a>
</nav>*/

