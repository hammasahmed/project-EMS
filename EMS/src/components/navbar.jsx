// import React, { useState, useContext } from 'react';
// import logo from '../assets/logo1.svg';
// import { Link } from 'react-router-dom';
// import AuthContext from '../contexts/AuthContext.jsx';

// const Navbar = () => {
//     const userData = JSON.parse(localStorage.getItem('userData'));

//     const { isAuthenticated, username, logout } = useContext(AuthContext);
//     const [menuOpen, setMenuOpen] = useState(false);
    
//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };
// //     console.log("isAuthenticated:", isAuthenticated);
// // console.log("username:", username);
//     const role = localStorage.getItem('role');
//     // const role = localStorage.getItem('lrole');
    
//     return (
//         <div className={'main sticky top-0 z-10 flex justify-between bg-purple-50 p-1 pb-2 pt-2 h-14'}>
//             <div className="hamburger p-3 sm:hidden" onClick={toggleMenu}>
//                 <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
//                 <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
//                 <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
//             </div>
//             <div className="logo mt-1 ml-2 flex gap-2">
//                 <img src={logo} alt="logo" className='h-8 animate-bounce animate-infinite' />
//                 <p className='text-2xl font-itim'>Evento {role}</p>
//             </div>
//             <div className={`features absolute top-14 left-0 w-full ${menuOpen ? 'flex' : 'hidden'} sm:relative sm:flex sm:top-0 sm:left-auto 
//             sm:w-auto sm:flex-row bg-white sm:bg-transparent flex-col sm:flex-row transition-all duration-300 ease-in-out`}>
//                 <ul className='flex flex-col items-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 text-sm md:space-x-10 p-3 sm:p-0'>
//                     <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><Link to="/">Home</Link></li>
//                     <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><Link to="/">Venue</Link></li>
//                     <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><Link to="/">Catering</Link></li>
//                     <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><a href="#">Reviews</a></li>
//                     <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><a href="#">Contact Us</a></li>
//                     <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><Link to="/login">Login</Link></li>
//                 </ul>
//             </div>
//             <div className="signup mt-2">
//                 {isAuthenticated  ? (
//                     <div>
//                         <a href="/vendordb">dashboard</a>
//                         <span>Welcome, {username}!</span>
//                         <button onClick={logout}>Logout</button>
//                     </div>
//                 ) : (
//                     <div>
//                         <Link to="/signup" className='px-6 py-2 border-1 border-slate-700 bg-purple-300  duration-200 rounded-md hover:rounded-full
//              hover:text-white hover:bg-gradient-to-r from-[#760fd6] to-[#ac0e0e]'>SignUp</Link>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React, { useState, useContext, useEffect } from 'react';
import logo from '../assets/logo1.svg';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext.jsx';
// import { set } from 'mongoose';

const Navbar = () => {
    const token = localStorage.getItem('token');
    const [logouts, setLogouts] = useState(false);
    const { isAuthenticated, username, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const x = logout();
    console.log(x)
    // console.log(isAuthenticated)
    // console.log(token)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // if (x && !sessionStorage.getItem("reloaded")) {
    //     sessionStorage.setItem("reloaded", "true");
    //     window.location.reload();
    // }

    const role = localStorage.getItem('role'); // Fetch if needed for specific behavior
    
    return (
        <div className={'main sticky top-0 z-10 flex justify-between bg-purple-50 p-1 pb-2 pt-2 h-14'}>
            <div className="hamburger p-3 sm:hidden" onClick={toggleMenu}>
                <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
                <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
                <div className="line w-5 h-0.5 m-0.5 bg-black"></div>
            </div>
            <div className="logo mt-1 ml-2 flex gap-2">
                <img src={logo} alt="logo" className='h-8 animate-bounce animate-infinite' />
                <p className='text-2xl font-itim'>Evento {role}</p>
            </div>
            <div className={`features absolute top-14 left-0 w-full ${menuOpen ? 'flex' : 'hidden'} sm:relative sm:flex sm:top-0 sm:left-auto 
            sm:w-auto sm:flex-row bg-white sm:bg-transparent flex-col sm:flex-row transition-all duration-300 ease-in-out`}>
                <ul className='flex flex-col items-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 text-sm md:space-x-10 p-3 sm:p-0'>
                    <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><Link to="/">Home</Link></li>
                    <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><Link to="/">Venue</Link></li>
                    <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><Link to="/">Catering</Link></li>
                    <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><a href="#">Reviews</a></li>
                    <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><a href="#">Contact Us</a></li>
                    {!isAuthenticated && <li className='hover:bg-purple-200 p-2 rounded-md tracking-[.05em] hover:translate-y-[2px]'><Link to="/login">Login</Link></li>}
                </ul>
            </div>
            <div className="signup mt-2">
                {isAuthenticated || token ? (
                    <div>
                        <a href="/vendordb">dashboard</a>
                        
                        <button onClick={logout}>logout</button>
                    </div>
                ) : (
                    <div>
                        <Link to="/signup" className='px-6 py-2 border-1 border-slate-700 bg-purple-300  duration-200 rounded-md hover:rounded-full
             hover:text-white hover:bg-gradient-to-r from-[#760fd6] to-[#ac0e0e]'>SignUp</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
