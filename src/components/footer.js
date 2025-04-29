import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
        <footer className="bg-[#908785] text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-white text-[13px] cursor-pointer">Unit 1, 234 Whitechapel Road</p>
            <p className="text-white text-[13px] cursor-pointer">London E1 1BJ</p>
            <p className="text-white text-[13px] cursor-pointer mt-2">+44 (0) 207 247 1693</p>
            <p className="text-white text-[13px] cursor-pointer">info@aquaproperty.co.uk</p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="text-white text-[13px] cursor-pointer space-y-2">
              <li>Properties for Sale</li>
              <li>Properties for Rent</li>
              <li>Property Valuation</li>
            </ul>
          </div>

          {/* Helpful Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Helpful Information</h3>
            <ul className="text-white text-[13px] cursor-pointer space-y-2">
              <li>About us</li>
              <li>Contact us</li>
              <li>
                <Link to="/pricing-policy" className="cursor-pointer hover:underline">
                  Pricing Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 text-white text-sm">
          &copy; 2023 Indo Letting Property Limited. Registered in England & Wales Company No. 09801560.
        </div>
      </footer>

    </div>
  )
}

export default Footer
