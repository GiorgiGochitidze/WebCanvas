import './CSS/Footer.css'

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">privacy policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                {/* <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div> */}
                <div className="footer-col">
                    <h4>Follow Us In Social Network</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/groups/1307912069858435" target='_blank'><i className="fab fa-facebook-f"></i></a>
                        <a href="https://discord.gg/3qUH8x7ZZm" target='_blank'><i className="fab fa-discord"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <i className='sponsor'>Made By VIOR Community</i> */}
   </footer>
     );
}
 
export default Footer;