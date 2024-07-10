import { FaTelegramPlane,FaYoutube,FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
function Footer(){
    return(
        <footer className="empty">
            <div className="footer-content">
            <h3>Subscribe us</h3>
            <p className="text">We publish interesting content!</p>
            <ul className="social-links empty">
                <li className="social-links-item"><a href="https://web.telegram.org/" target="blank"> <FaTelegramPlane size={32} /></a></li>
                <li className="social-links-item"><a href="https://www.instagram.com/" target="blank"> <ImInstagram size={32} /></a></li>
                <li className="social-links-item"><a href="https://www.youtube.com/" target="blank"> <FaYoutube size={32} /></a></li>
                <li className="social-links-item"><a href="https://www.facebook.com/" target="blank"> <FaFacebookSquare size={32} /></a></li>
                <li className="social-links-item"><a href="https://www.tiktok.com/" target="blank"> <AiFillTikTok size={32} /></a></li>
            </ul>
            </div>
        </footer>
    );
}
export default Footer