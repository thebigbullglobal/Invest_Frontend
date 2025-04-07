import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Dr Realtor Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Dr Realtor */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">About Dr Realtor</h2>
            <p className="text-sm text-gray-400">
              At Dr Realtor, our services encompass plot sales, plot acquisitions, property valuation, market analysis, and legal assistance. We pride ourselves on our in-depth understanding of the real estate market in Patna, Bihta, and nearby areas, allowing us to offer accurate and relevant information to our clients.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Useful Links</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="/" className="text-sm text-gray-400 hover:text-white">Home</a>
                <a href="/about-us" className="text-sm text-gray-400 hover:text-white">About Us</a>
                <a href="/career" className="text-sm text-gray-400 hover:text-white">Career</a>
              </div>
              <div className="space-y-2">
                <a href="/contact-us" className="text-sm text-gray-400 hover:text-white">Contact Us</a>
                <a href="/gallery" className="text-sm text-gray-400 hover:text-white">Gallery</a>
                <a href="/login" className="text-sm text-gray-400 hover:text-white">Login</a>
              </div>
            </div>
          </div>

          {/* Recently Listed Properties */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Recently Listed Properties</h2>
            <p className="text-sm text-gray-400">
              Check out our latest properties listed for sale or rent.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Contact Info</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Corporate & H.O:</span> 2nd Floor, E.29, Sector-3, Noida, 201301 (UP)
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Zonal Office:</span> 3rd Floor, Kamla Complex Near DMV, Saguna More, Bailey Road Patna - 801933
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Branch Office:</span> 2nd Floor, Chandra Tower, Chowk, Sevila Kalan, Majra, Dehradun, Uttarakhand 248171
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Phone:</span> +91 0000000000
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Email:</span> info@drrealtor.in
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 Big Bull Real Estate , All rights reserved.
          </p>
        </div>
       
      </div>
     
    </footer>
  );
};

export default Footer;