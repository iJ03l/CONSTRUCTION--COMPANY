// import React from 'react'

// function Navbar() {
//   return (
//     <div>
//       <nav className="flex md:flex-row  md:justify-between md:items-center items-center justify-between mx-auto px-8 md:px-10 shadow-lg">
//         <div className="cursor-pointer">
//           <img
//             className="w-32"
//             src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
//             alt="logo-image"
//           />
//         </div>

//         {/* nav-links */}
//         <div className="md:static absolute bg-white min-h-[75vh] min-w-full md:min-w-fit left-0 top-[20%] md:w-auto md:min-h-fit px-5 md:top-0 md:flex hidden">
//           <ul className="uppercase text-sm flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//             <li className="btn justify-start w-full px-4 py-3 mr-4 btn-success text-white md:bg-none md:px-5 md:m-0 md:w-auto rounded-md">
//               <a href="#">home</a>
//             </li>
//             <li>
//               <a href="#">who we are</a>
//             </li>
//             <li>
//               <a href="#">projects</a>
//             </li>
//             <li>
//               <a href="#">contacts</a>
//             </li>
//           </ul>
//         </div>
//        <div className="md:flex gap-4 hidden font-semibold">
//           <div className="tooltip tooltip-bottom" data-tip="Put a call across"> 
//             <button className="py-3 px-5 border hover:shadow-lg flex items-center justify-center gap-2 rounded-full btn btn-success  text-white">
//               <span className="w-4 h-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
//                   />
//                 </svg>
//               </span>
//               <span> (+234)-234-2223-43</span>
//             </button>
//           </div>

//           <div className="tooltip tooltip-bottom" data-tip="Send us a mail">
//             <button className="py-3 px-5 btn btn-success rounded-full text-white hover:shadow-lg">
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>

//         <div className="p-4 border hover:shadow-lg cursor-pointer md:hidden flex">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar

import { Link, NavLink} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {
  const [ togglerNav, setTogglerNav ] = useState(false);
  const clickHandler = () => {
    
      setTogglerNav(!togglerNav);
    
  }
  return (
    <nav className="h-auto md:my-auto fixed md:py-5 z-10 md:px-6 shadow-lg p2 bg-white w-full mx-auto transition-all ease-in-out">
      <div className="flex justify-between md:items-center items-center px-6 md:px-0">
        <Link to="/">
          <img
            className="w-32"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="logo-image"
          />
        </Link>
        <div className="hidden md:flex">
          <NavLink className="nav-link" to="/" onClick={clickHandler}>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about" onClick={clickHandler}>
            Who are we?
          </NavLink>
          <NavLink className="nav-link" to="/services" onClick={clickHandler}>
            services
          </NavLink>
          <NavLink className="nav-link" to="/projects" onClick={clickHandler}>
            projects
          </NavLink>
          <NavLink className="nav-link" to="/contact" onClick={clickHandler}>
            Contact
          </NavLink>
        </div>
        <div className="md:flex gap-4 hidden font-semibold">
          <div className="tooltip tooltip-bottom" data-tip="Put a call across">
            <button className="py-3 px-5 border hover:shadow-lg flex items-center justify-center gap-2 rounded-lg btn bg-green-600 border-none text-lg text-white">
              <span className="w-4 h-4">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>
              </span>
              <span id="show"> (+234)-234-2223-43</span>
            </button>
          </div>

          <div className="tooltip tooltip-bottom" data-tip="Send us a mail">
            <button className="py-3 px-5 btn bg-green-600 rounded-lg border-none text-white hover:shadow-lg">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <button
          className="flex items-center justify-center md:hidden btn bg-green-600 border-none text-white hover:shadow-lg"
          onClick={clickHandler}
        >
          {togglerNav ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
      <div
        className={
          togglerNav
            ? "flex flex-col absolute bg-white w-full z-50 gap-4 md:inline"
            : "hidden md:inline"
        }
        id="nav-dropdown"
      >
        <NavLink className="nav-link" to="/" onClick={clickHandler}>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about" onClick={clickHandler}>
          Who are we?
        </NavLink>
        <NavLink className="nav-link" to="/services" onClick={clickHandler}>
          services
        </NavLink>
        <NavLink className="nav-link" to="/projects" onClick={clickHandler}>
          projects
        </NavLink>
        <NavLink className="nav-link" to="/contact" onClick={clickHandler}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar