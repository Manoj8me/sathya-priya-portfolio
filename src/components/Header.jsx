// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => setMenuOpen(!menuOpen);

//     const closeMenu = () => setMenuOpen(false);

//     return (
//         <header>
//             <h1>Portfolio</h1>
//             <div className="hamburger" onClick={toggleMenu}>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//             <nav className={menuOpen ? "open" : ""}>
//                 <NavLink to="/" activeClassName="active" onClick={closeMenu}>
//                     Home
//                 </NavLink>
//                 <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
//                     About
//                 </NavLink>
//                 <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
//                     Contact
//                 </NavLink>
//                 <NavLink to="/projects" activeClassName="active" onClick={closeMenu}>
//                     Projects
//                 </NavLink>
//                 <NavLink to="/skills" activeClassName="active" onClick={closeMenu}>
//                     Skills
//                 </NavLink>
//             </nav>
//         </header>
//     );
// }

// export default Header;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            <h1>Portfolio</h1>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={menuOpen ? "open" : ""}>
                <NavLink to="/" onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink to="/about" onClick={closeMenu}>
                    About
                </NavLink>
                <NavLink to="/projects" onClick={closeMenu}>
                    Projects
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
