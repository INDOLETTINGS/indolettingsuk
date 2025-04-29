import React from 'react';
import { motion } from 'framer-motion';

function CallModal({ isModalOpen, setModalOpen }) {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-w-2xl text-center"
          >
            <h2 className="text-3xl font-extrabold mb-6 text-gray-800">📞 Contact Us</h2>
            <div className="text-lg space-y-4">
              <p className="text-gray-700">☎️ <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a></p>
              <p className="text-gray-700">☎️ <a href="tel:+0987654321" className="text-blue-600 hover:underline">+0 987 654 321</a></p>
            </div>
            <button
              className="mt-6 bg-[#e8d2cd] text-[#352926] px-6 py-3 rounded-lg shadow-md hover:bg-[#352926] hover:text-white transition-all text-lg"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default CallModal;
