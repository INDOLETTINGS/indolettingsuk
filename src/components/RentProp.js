import React, { useState } from "react";
import NavBar from './NavBar'
import CallModal from "./CallModal";
import { Link } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Home, Security, People, Gavel } from "@mui/icons-material";

function RentProp() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} setModalOpen={setModalOpen} />
            <CallModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />

            {/* Section 1 */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold">Properties for Rent</h1>
                    <p className="mt-4 text-gray-600">Looking to rent in London? Look no further.</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/images/pexels-pavel-danilyuk-8112184 copy.jpg" alt="Rent Properties" className="w-[80%] rounded-lg shadow-lg" />
                </div>
            </section>
            <section className="bg-[#908785] rounded m-2 p-8 flex flex-col md:flex-row justify-between items-center gap-10 text-[#352926] text-center">
                <div className="flex flex-col items-center">
                    <EventAvailableIcon />
                    <p className="text-md mx-4">Available 7 days a week</p>
                </div>

                <div className="flex flex-col items-center">
                    <LocalPhoneIcon />
                    <p className="text-md mx-4">Call us anytime</p>
                </div>

                <div className="flex flex-col items-center">

                    <AccessTimeIcon />
                    <p className="text-md mx-4">Superb turnaround time</p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/images/pexels-kindelmedia-7578939.jpg" alt="Freehold vs Leasehold" className="w-[80%] rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold pb-7">Important information for tenants:</h2>
                           <a href="/assets/documentd/iNDO-LETTINGS-offer-form.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Offer Form</a><br/>
                           <a href="/assets/documentd/general-holding-deposit-information.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">General Holding Deposit Information</a><br/>
                           <a href="/assets/documentd/tenant-charges.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Tenant Charges</a><br/>
                           <a href="/assets/documentd/client-money-handling-guidance.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">CMP – Money Handling Guidance</a><br/>
                </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-10 bg-white">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold">View our properties.</h2>
                    <p className="mt-4">All of our properties are listed via Zoopla or Rightmove. Please visit our portfolio below.</p>
                    <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        <Link to="/zoopla" className="bg-[#e8d2cd] text-[#352926] px-6 py-3 rounded-lg shadow-md hover:bg-[#352926] hover:text-[#e8d2cd] transition">
                            Zoopla
                        </Link>
                        <Link to="/rightmove" className="bg-[#e8d2cd] text-[#352926] px-6 py-3 rounded-lg shadow-md hover:bg-[#352926] hover:text-[#e8d2cd] transition">
                            Rightmove
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/assets/images/pexels-scottwebb-1029599 copy.jpg" alt="View Properties" className="w-[80%] rounded-lg shadow-lg" />
                </div>
            </section>    

            {/* Section 4 */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-10 bg-white">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold">We’ll be there for you.</h2>
                    <p className="mt-4">Our team will always be at hand to advise you every step of the way...</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/team-support.jpg" alt="Team Support" className="w-[80%] rounded-lg shadow-lg" />
                </div>
            </section>

            {/* Section 5 - Why Choose Us? */}
            <section className="p-10 min-h-[60vh] text-center">
                <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Transparency", icon: <Home fontSize="large" /> },
                        { title: "Secure Processing", icon: <Security fontSize="large" /> },
                        { title: "Expert Consultants", icon: <People fontSize="large" /> },
                        { title: "Legal Compliance", icon: <Gavel fontSize="large" /> },
                    ].map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
                            <div className="text-[#352926]">{feature.icon}</div>
                            <h3 className="text-xl font-bold mt-2">{feature.title}</h3>
                            <p className="text-gray-700">We provide top-notch service...</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#352926] text-white p-6 text-center">
                Indo Lettings © 2025 | All rights reserved.
            </footer>
        </div>
    );
}

export default RentProp;
