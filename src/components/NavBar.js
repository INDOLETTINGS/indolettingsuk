import React from 'react'
import { Link } from "react-router-dom";

function NavBar(props) {
    const {setMenuOpen,isMenuOpen,setModalOpen} = props
  return (
    <div>
       <nav className="bg-[#352926] shadow-md p-6 flex justify-between items-center w-full fixed top-0 left-0 z-50">
       <Link to="/"> <h1 className="text-xl font-bold text-[#e8d2cd]">Indo Lettings</h1></Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl text-white" onClick={() => setMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className={`md:flex space-x-6 absolute md:relative bg-white md:bg-transparent top-full left-0 w-full md:w-auto shadow-md md:shadow-none p-4 md:p-0 ${isMenuOpen ? "block" : "hidden"} md:flex`}>

          {/* Properties */}
          <li className="relative group">
            <Link
              to="/"
              className="hover:text-[#352926] hover:bg-[#e8d2cd] px-2 py-1 rounded text-[#e8d2cd] block"
            >
              Properties 
            </Link>
            <ul
              className="absolute left-0 top-full  group-hover:flex flex-col bg-[#e8d2cd] rounded shadow-md py-2 w-40 z-50 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
            >
              <li>
                <Link
                  to="/rent"
                  className="block px-4 py-2 hover:bg-[#ffe1db] text-[#352926]"
                >
                  For Rent
                </Link>
              </li>
              <li>
                <Link
                  to="/sale"
                  className="block px-4 py-2 hover:bg-[#ffe1db] text-[#352926]"
                >
                  For Sale
                </Link>
              </li>
            </ul>
          </li>


          {/* Contact */}
          <li className="relative group">
            <Link to="/contact" className="hover:text-[#352926] hover:bg-[#e8d2cd] px-2 py-1 rounded text-[#e8d2cd] block">
              Contact
            </Link>
          </li>
          {/* About */}
          <li className="relative group">
            <Link to="/about" className="hover:text-[#352926] hover:bg-[#e8d2cd] px-2 py-1 rounded text-[#e8d2cd] block">
              About
            </Link>
          </li>
        </ul>

        {/* Call Us Button */}
        <button
          className="bg-[#e8d2cd] text-[#352926] px-4 py-2 rounded-lg shadow-md hover:bg-white transition"
          onClick={() => setModalOpen(true)}
        >
          Call Us
        </button>
      </nav>

    </div>
  )
}

export default NavBar
