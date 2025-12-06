import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FFB343] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black">Shankara Caterings</h3>
            <p className="text-black mb-4 leading-relaxed">
              Creating memorable dining experiences with authentic flavors and exceptional service for over a decade.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="bg-black p-2 rounded-full hover:bg-[#573714] transition-colors">
                <Facebook className="h-5 w-5 text-[#FFB343]" />
              </a>
              <a href=" https://www.instagram.com/shankara_caterings
" className="bg-black p-2 rounded-full hover:bg-[#573714] transition-colors">
                <Instagram className="h-5 w-5 text-[#FFB343]" />
              </a>
              <a href="#" className="bg-black p-2 rounded-full hover:bg-[#573714] transition-colors">
                <Twitter className="h-5 w-5 text-[#FFB343]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#About" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-black transition-colors">Gallery</a></li>
              <li><a href="#Contact" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-black">Our Services</h4>
            <ul className="space-y-2 text-black">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Social Gatherings</li>
              <li>Festival Catering</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-black">Contact Info</h4>

            <div className="space-y-4">

              {/* Address 1 */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-black" />
                <p className="text-black">
                  Kitchen: D No 3-353/LIG, Road No 42 D. Mayuri Nagar, Miyapur, Hyderabad, Telangana 500049.
                </p>
              </div>

              {/* Address 2 */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-black" />
                <p className="text-black">
                Office:Lane 2, Shilpa Gardens, 11B 11C, Kondapur, Hyderabad, Telangana 500084

                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 text-black" />
                <p className="text-ehite leading-relaxed">
                  +91 7702237575 <br />
                  +91 9885667575

                </p>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-black" />
                <p className="text-black">24*7</p>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#6c461a] mt-10 pt-6 text-center">
          <p className="text-black">
            &copy; {new Date().getFullYear()} Shankara Caterings. All rights reserved.
          </p>
        </div>

        {/* StaffArc Credit */}
        <div className="border-t border-black mt-6 pt-5 text-center text-sm">
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#EADABC] font-semibold hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
