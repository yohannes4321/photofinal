import { Youtube, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#008080] font-['Montserrat'] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Are you ready to stand out?</h2>
         
          <button className="bg-white text-[#008080] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            LET'S GET STARTED
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:alemuyohannes@gmail.com" className="flex items-center gap-2 hover:text-gray-200">
                <Mail size={18} />
                info@seakatemedia.com
              </a>
               
              
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <div className="flex items-start gap-2">
              <MapPin size={18} />
              <div>
                <p>7 Durham Street,</p>
                <p> Mount Druitt,</p>
                <p>2770 , NSW</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-200"><Youtube size={24} /></a>
              <a href="#" className="hover:text-gray-200"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-gray-200"><Instagram size={24} /></a>
              <a href="https://web.facebook.com/profile.php?id=61573207808409&_rdc=1&_rdr#" className="hover:text-gray-200"><Facebook size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/20">
          <p>© 2025 Seakate Media  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;