import React, { useState } from "react";
import NavBar from './NavBar';
import CallModal from "./CallModal";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Home, Security, People, Gavel } from "@mui/icons-material";

function SaleProp() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} setModalOpen={setModalOpen} />
            <CallModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />

            {/* Section 1 - Introduction */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold">Find Your Perfect Home</h1>
                    <p className="mt-4 text-gray-600">
                        Buying a property is one of the biggest investments you'll ever make. Whether it's your dream home
                        or an addition to your investment portfolio, we're here to guide you every step of the way.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/sale-banner.jpg" alt="Properties for Sale" className="w-[80%] rounded-lg shadow-lg" />
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


            {/* Section 2 - View Properties */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-10 bg-white">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold">Browse Our Listings</h2>
                    <p className="mt-4">
                        We offer a diverse selection of properties, from modern apartments to family homes. Explore our listings
                        through Zoopla and Rightmove to find the best options available.
                    </p>
                    <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        <a href="https://www.landregistersearch.co.uk/" className="bg-[#e8d2cd] text-[#352926] px-6 py-3 rounded-lg shadow-md hover:bg-[#352926] hover:text-[#e8d2cd] transition">
                            View on Zoopla
                        </a>
                        <a href="https://www.landregistersearch.co.uk/" className="bg-[#e8d2cd] text-[#352926] px-6 py-3 rounded-lg shadow-md hover:bg-[#352926] hover:text-[#e8d2cd] transition">
                            View on Rightmove
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/view-properties.jpg" alt="View Properties" className="w-[80%] rounded-lg shadow-lg" />
                </div>
            </section>

            {/* Section 3 - Freehold vs Leasehold */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/freehold.jpg" alt="Freehold vs Leasehold" className="w-[80%] rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold">Understanding Freehold & Leasehold</h2>
                    <p className="mt-4">
                        Freehold means you own the property and the land outright. Leasehold means you own the property
                        for a fixed term but not the land. If you're buying leasehold, check the lease length and any service
                        charges involved before making a decision.
                    </p>
                </div>
            </section>

            {/* Section 4 - First-time Buyers & Investment Support */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-10 bg-white">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold">Buying Your First Home or Investing?</h2>
                    <p className="mt-4">
                        Whether you’re a first-time buyer navigating mortgages and deposits or an investor expanding your
                        portfolio, our experts are here to assist. Our in-house legal team can also provide guidance on
                        contracts, financing, and tax implications.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="/team-support.jpg" alt="Property Guidance" className="w-[80%] rounded-lg shadow-lg" />
                </div>
            </section>

            {/* Section 5 - Why Choose Us? */}
            <section className="p-10 min-h-[60vh] text-center">
                <h2 className="text-3xl font-bold mb-10">Why Buy With Indo Lettings?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Market Expertise", icon: <Home fontSize="large" />, desc: "Our team has extensive knowledge of London's property market." },
                        { title: "Secure Transactions", icon: <Security fontSize="large" />, desc: "We ensure safe and legally compliant property deals." },
                        { title: "Personalized Support", icon: <People fontSize="large" />, desc: "We assist buyers at every stage, from viewings to contracts." },
                        { title: "Legal Guidance", icon: <Gavel fontSize="large" />, desc: "Our in-house legal team helps simplify the buying process." },
                    ].map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
                            <div className="text-[#352926]">{feature.icon}</div>
                            <h3 className="text-xl font-bold mt-2">{feature.title}</h3>
                            <p className="text-gray-700">{feature.desc}</p>
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

export default SaleProp;
