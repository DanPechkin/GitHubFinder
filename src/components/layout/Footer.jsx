import React from 'react';
import PictureSharp from "./PictureSharp.jsx";

function Footer(props) {
    const footerYear = new Date().getFullYear()
    return (
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            <div>
                <PictureSharp />
                <p>Copyright &copy; {footerYear} All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;