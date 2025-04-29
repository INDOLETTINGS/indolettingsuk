import { Link } from "react-router-dom";
import React, { useState } from "react";
import CallModal from "./CallModal";
import NavBar from "./NavBar";
import Footer from "./footer";

function AboutPage() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
            {/* Top Navigation Bar */}
            <NavBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} setModalOpen={setModalOpen} />

            {/* Section 1: About Us */}
            <section className="flex flex-col md:flex-row items-center w-full h-screen bg-white">
                <div className="w-full md:w-1/2 p-10 px-20">
                    <h2 className="text-4xl font-bold mb-4 text-[#352926]">About Us</h2>
                    <p className="text-lg text-gray-700">
                        Indo Lettings is dedicated to providing the best real estate solutions.
                        Our team ensures that your needs are met with professionalism and efficiency.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/assets/images/AI Designer-Concrete wall office vi logo mockup rendering.png" alt="About Us" className="w-full h-full object-cover" />
                </div>
            </section>

            {/* Section 2: Client First Approach */}
            <section className="flex flex-col md:flex-row items-center w-full h-screen bg-gray-100">
                <div className="w-full md:w-1/2 px-4">
                    <img src="/assets/images/pexels-pavel-danilyuk-8112184.jpg" alt="Client First" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#352926]">We’ll Put You First</h2>
                    <p className="text-lg text-gray-700">
                        Our sole focus is to ensure that our clients are happy and successful. We believe that
                        our success follows the success and happiness of our clients.
                    </p>
    
                    {/* New Button for PDF */}
                    <a 
                        href="/path/to/your/pdf/IndoLettings_Info.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className="mt-4 px-6 py-3 bg-[#e8d2cd] text-[#352926] font-bold rounded-lg shadow-md hover:bg-[#352926] hover:text-white transition">
                            More About Indo Lettings
                        </button>
                    </a>
                </div>
            </section>

            {/* Section 3: Investment Safety */}
            <section className="flex flex-col md:flex-row items-center w-full h-screen bg-white">
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-4xl font-bold mb-4 text-[#352926]">Your Investment is Safe</h2>
                    <p className="text-lg text-gray-700">
                        We are part of the Property Redress Scheme. Property Agents are required to join
                        a government-authorized consumer redress scheme to protect your investments.
                    </p>
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <img src="/assets/images/pexels-thirdman-8469941 copy.jpg" alt="Investment Safety" className="w-full h-full object-cover" />
                </div>
            </section>

            {/* Footer */}
            <Footer/>

            {/* Call Modal */}
            <CallModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
        </div>
    );
}

export default AboutPage;
