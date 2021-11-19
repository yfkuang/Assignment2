import logo from '../../assets/logo.png';
import { Link } from "react-router-dom"
import "./styles.css"

export const Footer = () => {
    return (
        <footer>
            <Link className="back-to-top" to={{hash: "#top"}}>Back to top</Link>
            <div className="footer-logo-container">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-bottom">
                <p>&copy; 2008-2021, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}
