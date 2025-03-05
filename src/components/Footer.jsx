import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full py-6  border-t border-[#F6C453] bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#D4AF37] text-white"
    >
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-40 2xl:px-64">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
          {/* Left Section - Logo & Social Icons */}
          <div
            className="flex  mt-[30px] flex-col items-center md:items-start space-y-6
          xl:mt-[130px]
          md:mt-[110px]"
          >
            {/* Logo Section */}
            <div className="flex flex-col gap-3  items-center md:items-start">
              <img
                src="images/03.png"
                alt="logo"
                className="h-14 ml-[20px] md:h-14 lg:h-16 xl:h-18 2xl:h-[70px] w-auto
                md:ml-[70px]"
              />
              <img
                src="images/02.png"
                alt="logoname"
                className="h-5 ml-2 md:h-6 lg:h-8 xl:h-9 2xl:h-6 w-auto"
              />
            </div>

            {/* Contact & Social Icons */}
            <div className="flex ml-3 flex-wrap justify-center md:justify-start gap-6">
              <a
                href="https://www.instagram.com/studiopic.k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-[#FF9EAA] transition-all"
              >
                <FaInstagram size={28} />
              </a>

              <a
                href="https://www.facebook.com/studiopic.k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-[#6094D7] transition-all"
              >
                <FaFacebook size={28} />
              </a>

              <a
                href="https://wa.me/919655350352"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-[#25D366] transition-all"
              >
                <FaWhatsapp size={28} />
              </a>

              <a
                href="mailto:Studio.pick@outlook.com"
                className="text-[#FFD700] hover:text-[#E5CFF7] transition-all"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>

          {/* Right Section - Google Map & Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FFD700]">ADDRESS</h3>
            <p className="text-[#E5CFF7] leading-relaxed">
              Kattupillayar Kovil stop, Narimedu, <br /> Madurai - 625002
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                className="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.937714613196!2d78.12628717555144!3d9.939140590163207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5eb93b0e4eb%3A0x90994ae502835666!2sKattu%20Pillaiyar%20Kovil%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1741173295851!5m2!1sen!2sin"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Centered Copyright Text */}
        <p className="text-center text-[#E5CFF7] text-sm sm:text-base mt-8">
          &copy; {new Date().getFullYear()} Licensing. Powered by Studiopick.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
