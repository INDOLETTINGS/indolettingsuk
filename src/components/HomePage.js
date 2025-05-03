import React, { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CallModal from "./CallModal";
import NavBar from "./NavBar";
import Footer from "./footer";


const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const services = [
    {
      id: 1,
      title: "Property Rent",
      description: "We provide  property management services to ensure your home is in great hands.",
      image: "assets/images/photo-1646153389640-958d7ba1a864.avif",
    },
    {
      id: 2,
      title: "Property Sales",
      description: "We help you buy and sell properties at the best market rates with smooth transactions.",
      image: "assets/images/propimage1.jpeg",
    },
    {
      id: 3,
      title: "Rental Services",
      description: "We assist landlords and tenants in finding the perfect rental property with ease.",
      image: "assets/images/premium_photo-1661963643994-71bd551d73c1.avif",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <NavBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} setModalOpen={setModalOpen}/>

      <CallModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />


      <header
        className="text-white text-center  py-40 md:py-60 mt-16 px-4"
        style={{
          backgroundImage: 'url("assets/images/photo-1738168246881-40f35f8aba0a.avif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <h1 className="text-[#352926] text-4xl font-bold">Welcome to Indo Lettings</h1>
        <p className="text-[#352926]  text-lg mt-2">Find your perfect home with ease</p>
        <button className="text-[#352926] bg-[#e8d2cd] mt-4 px-6 py-2 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Explore Listings
        </button>
      </header>

      {/* availability */}
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
      {/* Our services Section */}
      <section className="container mx-auto pt-24 px-6 text-center">
        <h2 className="text-[44px] font-semibold text-[#352926] mb-2">Our Services</h2>
        <h5 className="text-[10px] text-[#352926] mb-4">Specialising in lettings, selling and investing</h5>
        <hr className="border-t-1 border-[#352926] my-20 mx-auto w-7/8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#352926]">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <button className="mt-3 px-4 py-2 bg-[#e8d2cd] text-[#352926] rounded-lg hover:bg-[#352926] hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex items-center py-16 bg-[#f5f5f5]">
        <div className="container mx-auto gap-8 flex flex-col md:flex-row items-center justify-between px-6">

          <div className="w-full md:w-1/2">
            <img
              src="assets/images/premium_photo-1680806489225-f4069e82c373.jpeg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold text-[#352926] mb-4">About Us</h2>
            <p className="text-[14px] text-gray-700 mb-6">
              At Indo Lettings, we are committed to helping you find your dream home. With years of experience in property management and sales, we
              ensure that every client gets the best service and support throughout their journey. Our mission is to make the process of renting, buying,
              or selling properties as smooth and hassle-free as possible.
            </p>
            <button className="px-6 py-2 bg-[#e8d2cd] text-[#352926] rounded-lg hover:bg-[#352926] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
        <Footer/>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-[13px] cursor-pointer text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Indo Lettings. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
