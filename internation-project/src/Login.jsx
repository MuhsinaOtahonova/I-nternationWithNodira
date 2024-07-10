import 'bootstrap/dist/css/bootstrap.min.css';
import { PiStudentBold } from "react-icons/pi";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();

    let handleNextClick = () => {
        let selectedProfile = document.querySelector('input[name="profile"]:checked');
        if (selectedProfile && selectedProfile.value === "student") {
            navigate('/login2');
        } else {
            // Handle other cases if needed
        }
    };
    return (
        <div className="container login">
            <div className="row login-content d-flex justify-content-between">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div className="choose-profile">
                        <h2 className='fs-1'>Choose your profile</h2>
                        <div className="options d-flex flex-column">
                            <label htmlFor="student" className="option-box d-flex justify-content-between mt-5">
                                <div className='d-flex'>
                                <PiStudentBold className='login-icon' size={50} />
                                <div className="d-flex align-items-center">
                                <div>
                                    <p><b>Student</b></p>
                                    <p className='text mb-0'>Do your homework on your computer</p>
                                </div>
                                </div>
                                </div>
                                <input type="radio" name='profile' value="student" id="student"/>
                            </label>
                            <label htmlFor="staff" className="option-box d-flex justify-content-between mt-3">
                                <div className='d-flex'>
                                <LiaIdCardAltSolid  className='login-icon' size={50} />
                                <div className="d-flex align-items-center">
                                <div>
                                    <p><b>Staff</b></p>
                                    <p className='text mb-0'>Automated chain of process</p>
                                </div>
                                </div>
                                </div>
                                <input type="radio" name='profile' value="staff" id='staff' />
                            </label>
                            <button className='login-button mt-4' type='button'  onClick={handleNextClick}><b>Next</b></button>
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
export default Login
/* <nav>
<a href="#"><img src="src/assets/image-removebg-preview.png" alt="logo" width={190} className='login-logo' /></a>
</nav>*/

