import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import displaylogo from "../../images/displaylogo.svg"
import menuopen from "../../images/menuopen.svg"
import menuclose from "../../images/menuclose.svg"


const Nav = () => {




  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };




  return (
    <div className=' relative '>
      <ol className=' w-[100%]  hidden bg-white fixed top-0 z-50  h-[80px] justify-between lg:flex md:px-20 text-xl py-[15px]  font-RedHatdisplay font-medium'>

        <li className='flex  lg:ml-3 gap-2  '><img className='w-[4vw] h-[40px]' src={displaylogo} alt="" />
          <h4 className=' w-[12vw]'>Marvie Foods</h4> </li>
        <li className='flex justify-between gap-[5vw]'>
          <li className='flex  gap-[2vw] '>

            <Link to="/" className="hover:text-customOrange">Home</Link>

            <Link to="/aboutcontainer" className="hover:text-customOrange">About  Us</Link>
            <Link to="/ourmenu" className="hover:text-customOrange">Menu</Link>
            <Link to="/howitworks" className="hover:text-customOrange">How it Works</Link>
            <Link to="/faqcontainer" className="hover:text-customOrange">FAQs</Link>
            <Link to="/footer" className="hover:text-customOrange">Contact Us</Link>

          </li>
          <button className='text-white justify-center  bg-customOrange w-[140px] mt-2 rounded-[10px]'>Sign in</button>  </li>

      </ol>


      {/* mobile */}

      <div id='navbar' className=' relative w-full bg-cover h-[111px] lg:hidden to xy-[15px]  ' onMouseLeave={handleMouseLeave}>
        <ol className='w-[100%] py-8 bg-white md:gap-[50vw] px-[24px] justify-center items-center  flex-row flex text-xl fixed z-40 font-RedHatdisplay lg:hidden font-medium'>

          <li className='flex ml-3 mt-[26px] w-full  gap-2'>
            <img className=' w-[21.0px] h-[21.0px] md:w-[30.5px] md:h-[30.5px] ' src={displaylogo} alt="" />
            <h4 className=' flex flex-row flex-wrap '>Marvie Foods</h4> 
            </li>

          <li className='flex  w-full flex-row  justify-center   gap-2'>
          <button className='text-white flex justify-center bg-customOrange w-[140px] h-[50px] mt-3 text-center p-2 rounded-[10px]'>Sign in</button>
            
               <button  onClick={toggleMenu} className=" justify-center flex items-center ">
              {/* Show the open icon if the menu is closed, else show the close icon */}
              {!isOpen ?
                <img
                  src={menuopen}
                  alt='Open Menu'
                  className='w-[37px] h-[35px] md:w-[47px] md:h-[45px]'
                />
                : (
                  <img
                    src={menuclose}
                    alt='Close Menu'
                    className=' hover:bg-amber-900 w-[47.23px] h-[45.66px]'
                  />
                )}
            </button>
          </li>
        




        {/* Mobile Navigation Menu */}
        {isOpen && (

          <ol className="rounded-l-[16px] mt-10 right-0 top-0 w-[284px]  flex-wrap z-50 rounded-tl-md rounded-bl-md h-[620px] flex flex-col gap-[45.11px] bg-white  shadow-lg p-4 text-center lg:hidden absolute" onMouseLeave={handleMouseLeave}>

            <Link to="/" className="hover:text-customOrange">Home</Link>

            <Link to="/aboutcontainer" className="hover:text-customOrange  hover:bg-customBrown">About  Us</Link>
            <Link to="/ourmenu" className="hover:text-customOrange  hover:bg-customBrown ">Menu</Link>
            <Link to="/howitworks" className="hover:text-customOrange  hover:bg-customBrown">How it Works</Link>
            <Link to="/faqcontainer" className="hover:text-customOrange  hover:bg-customBrown">FAQs</Link>
            <Link to="/footer" className="hover:text-customOrange  hover:bg-customBrown">Contact Us</Link>
            <button className="bg-customOrange text-white py-2 p-[10px] w-[268px] h-[75px] hover:bg-customBrown rounded-[10px] mt-2">Sign in</button>


          </ol>
        )}


     </ol> </div>


    </div>

  )
}

export default Nav