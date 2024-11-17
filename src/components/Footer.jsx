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
                <a href="mailto:manoj8me@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>
                <a
                    href="https://www.linkedin.com/in/manoj-kumar-r-74a0b3241"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Manoj8me"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
            </div>
            <p>© 2024 Manoj Kumar R. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
