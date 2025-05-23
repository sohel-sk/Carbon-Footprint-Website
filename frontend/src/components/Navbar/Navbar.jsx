// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">WebName</div>
//       <ul className="nav-links">
//         <li>Home</li>
//         <li className="active">Calculate</li>
//         <li>Points</li>
//         <button className="login-btn">Login/Sign up</button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">WebName</div>
//       <ul className="nav-links">
//       <Link to="/"><li>Home</li></Link>
//       <Link to="/calculate"><li className="active">Calculate</li></Link>
//         <li>Points</li>
//         <Link to="/auth">
//           <button className="login-btn">Login/Sign up</button>
//         </Link>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token); // Convert token existence to boolean
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">SustainaTrack</div>
//       <ul className="nav-links">
//         <Link to="/"><li>Home</li></Link>
//         <Link to="/calculate"><li className="active">Calculate</li></Link>
//         <li>Points</li>

//         {isLoggedIn ? (
//           <div className="profile-menu">
//             <span className="profile-icon">👤</span>
//             <button onClick={handleLogout} className="logout-btn">Logout</button>
//           </div>
//         ) : (
//           <Link to="/auth" onClick={() => localStorage.setItem("redirectAfterLogin", window.location.pathname)}>
//             <button className="login-btn">Login/Sign up</button>
//           </Link>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { User, LogOut } from "lucide-react"; // Import icons
// import "./Navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/"; // Redirect to home after logout
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="logo">SustainaTrack</div>
//       <ul className="nav-links">
//         <Link to="/"><li>Home</li></Link>
//         <Link to="/calculate"><li className="active">Calculate</li></Link>
//         <Link to="/redeem"><li>Redeem</li></Link>

//         {isLoggedIn ? (
//           <div className="profile-container" ref={dropdownRef}>
//             <User
//               className="profile-icon"
//               size={28}
//               onClick={() => setShowDropdown(!showDropdown)}
//             />
//             {showDropdown && (
//               <div className="dropdown-menu">
//                 <Link to="/profile" className="dropdown-item">Profile</Link>
//                 <button className="dropdown-item logout-btn" onClick={handleLogout}>
//                   <LogOut size={18} className="logout-icon" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link to="/auth">
//             <button className="login-btn">Login/Sign up</button>
//           </Link>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom"; // Import useLocation
// import { User, LogOut } from "lucide-react"; 
// import "./Navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation(); // Get current location

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/"; // Redirect to home after logout
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="logo">SustainaTrack</div>
//       <ul className="nav-links">
//         <Link to="/">
//           <li className={location.pathname === "/" ? "active" : ""}>Home</li>
//         </Link>
//         <Link to="/calculate">
//           <li className={location.pathname === "/calculate" ? "active" : ""}>Calculate</li>
//         </Link>
//         <Link to="/redeem">
//           <li className={location.pathname === "/redeem" ? "active" : ""}>Redeem</li>
//         </Link>

//         {isLoggedIn ? (
//           <div className="profile-container" ref={dropdownRef}>
//             <User
//               className="profile-icon"
//               size={28}
//               onClick={() => setShowDropdown(!showDropdown)}
//             />
//             {showDropdown && (
//               <div className="dropdown-menu">
//                 <Link to="/profile" className="dropdown-item">Profile</Link>
//                 <button className="dropdown-item logout-btn" onClick={handleLogout}>
//                   <LogOut size={18} className="logout-icon" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link to="/auth">
//             <button className="login-btn">Login/Sign up</button>
//           </Link>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom"; 
// import { User, LogOut, ChevronDown } from "lucide-react"; 
// import "./Navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showMoreDropdown, setShowMoreDropdown] = useState(false);
//   const profileRef = useRef(null);
//   const moreRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/";
//   };

//   const toggleMoreDropdown = () => {
//     setShowMoreDropdown((prev) => !prev);
//     setShowProfileDropdown(false); // Close profile dropdown when opening "More"
//   };

//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown((prev) => !prev);
//     setShowMoreDropdown(false); // Close "More" dropdown when opening Profile
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }
//       if (moreRef.current && !moreRef.current.contains(event.target)) {
//         setShowMoreDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="logo">SustainaTrack</div>
//       <ul className="nav-links">
//         <Link to="/">
//           <li className={location.pathname === "/" ? "active" : ""}>Home</li>
//         </Link>
//         <Link to="/calculate">
//           <li className={location.pathname === "/calculate" ? "active" : ""}>Calculate</li>
//         </Link>
//         <Link to="/redeem">
//           <li className={location.pathname === "/redeem" ? "active" : ""}>Redeem</li>
//         </Link>

//         {/* More Dropdown */}
//         <div className={`dropdown-container ${showMoreDropdown ? "active" : ""}`} ref={moreRef}>
//           <button className="dropdown-btn" onClick={toggleMoreDropdown}>
//             More <ChevronDown size={16} />
//           </button>
//           <div className="dropdown-menu">
//             <Link to="/about" className="dropdown-item">About</Link>
//             <Link to="/carbonInfo" className="dropdown-item">Carbon Footprint</Link>
//           </div>
//         </div>


//         {isLoggedIn ? (
//           <div className="profile-container" ref={profileRef}>
//             <User
//               className="profile-icon"
//               size={28}
//               onClick={toggleProfileDropdown}
//             />
//             {showProfileDropdown && (
//               <div className="dropdown-menu">
//                 <Link to="/profile" className="dropdown-item">Profile</Link>
//                 <button className="dropdown-item logout-btn" onClick={handleLogout}>
//                   <LogOut size={18} className="logout-icon" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link to="/auth">
//             <button className="login-btn">Login/Sign up</button>
//           </Link>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { User, LogOut, ChevronDown } from "lucide-react"; 
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const profileRef = useRef(null);
  const moreRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const toggleMoreDropdown = () => {
    setShowMoreDropdown((prev) => !prev);
    setShowProfileDropdown(false); // Close profile dropdown when opening "More"
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown((prev) => !prev);
    setShowMoreDropdown(false); // Close "More" dropdown when opening Profile
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setShowMoreDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">SustainaTrack</span>
          {/* <span className="logo-leaf">🍃</span> */}
        </div>
        <ul className="nav-links">
          <Link to="/">
            <li className={location.pathname === "/" ? "active" : ""}>Home</li>
          </Link>
          <Link to="/calculate">
            <li className={location.pathname === "/calculate" ? "active" : ""}>Calculate</li>
          </Link>
          <Link to="/redeem">
            <li className={location.pathname === "/redeem" ? "active" : ""}>Redeem</li>
          </Link>

          {/* More Dropdown */}
          <div className={`dropdown-container ${showMoreDropdown ? "active" : ""}`} ref={moreRef}>
            <button className="dropdown-btn" onClick={toggleMoreDropdown}>
              More <ChevronDown size={16} className={`chevron ${showMoreDropdown ? "rotate" : ""}`} />
            </button>
            {showMoreDropdown && (
              <div className="dropdown-menu">
                <Link to="/about" className="dropdown-item">About</Link>
                <Link to="/carbonInfo" className="dropdown-item">Carbon Footprint</Link>
              </div>
            )}
          </div>

          {isLoggedIn ? (
            <div className="profile-container" ref={profileRef}>
              <div className="profile-avatar" onClick={toggleProfileDropdown}>
                <User className="profile-icon" size={22} />
              </div>
              {showProfileDropdown && (
                <div className="dropdown-menu profile-dropdown">
                  <div className="dropdown-header">
                    <User size={18} />
                    <span>My Account</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                  <button className="dropdown-item logout-btn" onClick={handleLogout}>
                    <LogOut size={18} className="logout-icon" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth">
              <button className="login-btn">Login/Sign up</button>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
