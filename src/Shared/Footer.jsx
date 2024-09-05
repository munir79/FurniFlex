
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { FaFlagUsa } from "react-icons/fa";
import logo1 from '../assets/Logo/icon.png';
import logo2 from '../assets/Logo/icon.png';
const Footer = () => {
    return (
    //     <footer className="bg-gray-900 text-gray-300 py-10">
    //     <div className="container mx-auto flex justify-between items-start">
          
        
          
    //       <div className="space-y-2">
    //         <h2 className="text-2xl font-semibold text-white">FurniFlex</h2>
    //       </div>
      
          
    //       <div>
    //         <h4 className="font-bold text-white mb-2">About US</h4>
    //         <ul className="space-y-1">
    //           <li><a href="#" className="hover:text-white">Master Plan</a></li>
    //           <li><a href="#" className="hover:text-white">Jobs</a></li>
    //           <li><a href="#" className="hover:text-white">Invest</a></li>
    //           <li><a href="#" className="hover:text-white">Pressroom</a></li>
    //           <li><a href="#" className="hover:text-white">Blog</a></li>
    //           <li><a href="#" className="hover:text-white">Contact</a></li>
    //         </ul>
    //       </div>
      
         
    //       <div>
    //         <h4 className="font-bold text-white mb-2">Explore EEVE</h4>
    //         <ul className="space-y-1">
    //           <li><a href="#" className="hover:text-white">Unlock my Robot Power</a></li>
    //           <li><a href="#" className="hover:text-white">Starlight</a></li>
    //           <li><a href="#" className="hover:text-white">Robot Platform</a></li>
    //           <li><a href="#" className="hover:text-white">EEVE Roadmap</a></li>
    //         </ul>
    //       </div>
      
         
    //       <div>
    //         <h4 className="font-bold text-white mb-2">Community & Support</h4>
    //         <ul className="space-y-1">
    //           <li><a href="#" className="hover:text-white">Willow X Community</a></li>
    //           <li><a href="#" className="hover:text-white">Developer & Maker Access</a></li>
    //           <li><a href="#" className="hover:text-white">Special Cases</a></li>
    //         </ul>
    //       </div>
      
    //     </div>
      
      
    //     <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between text-sm">
        
    //       <div className="flex space-x-4">
    //         <a href="#" className="hover:text-white">March22 Recap</a>
    //         <a href="#" className="hover:text-white">Privacy Policy</a>
    //         <a href="#" className="hover:text-white">General Terms</a>
    //         <a href="#" className="hover:text-white">Contact</a>
    //       </div>
    //       <p className="text-gray-400">United States (English)</p>
    //     </div>
        
    //   </footer>

    <footer className="bg-[#0E0E0E]  text-[#81859F] ">
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-evenly">
        {/* Logo */}
     
        <div>
          <a href="#" className="flex items-center space-x-2 text-xl font-bold">
          <img src={logo1} alt="" />
            <p className="text-white">Furni<span className=" text-blue-500">Flex </span></p>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <div>
            <h2 className="font-semibold">About Us</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Master Plan</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Invest</a></li>
              <li><a href="#" className="hover:underline">Pressroom</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">Explore EEVE</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Unlock my Robot Power</a></li>
              <li><a href="#" className="hover:underline">Starlight</a></li>
              <li><a href="#" className="hover:underline">Robot Platform</a></li>
              <li><a href="#" className="hover:underline">EEVE Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">Community & Support</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Willow X Community</a></li>
              <li><a href="#" className="hover:underline">Developer & Maker Access</a></li>
              <li><a href="#" className="hover:underline">Special Cases</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-neutral-focus mt-8 pt-4 flex justify-between items-center">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-xl"><LuFacebook /></a>
          <a href="#" className="text-xl"><IoLogoInstagram /></a>
          <a href="#" className="text-xl"><FaXTwitter /></a>
          <a href="#" className="text-xl"><LuLinkedin /></a>
        </div>

        {/* Legal Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">March22 Recap</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">General Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Country and Language */}
        <div className="flex items-center space-x-2">
          <span className="flag-icon flag-icon-us"></span>
          <span className="flex"> <FaFlagUsa className="mt-1 gap-1" />United States (English)</span>
        </div>
        
      </div>
      <aside>
    <p className="text-center text-[#81859F] mt-10">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
    </div>
    
  </footer>
    );
};

export default Footer;