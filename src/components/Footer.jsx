// import React from 'react'

// function Footer() {
//     return (
//         <div className='Footer'>
//             <p>© 2024 Manoj Kumar R. All Rights Reserved.</p>
//         </div>
//     )
// }

// export default Footer


import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="Footer">
            <div className="contact">
                <a href="mailto:sathiyapriyas658@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>
                <a
                    href="https://www.linkedin.com/in/sathya-priya-s-5172b7339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Sathiyapriya1116"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
            </div>
            <p>© 2025 Sathya Priya S. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
