
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              Arka<span className="text-blue-400">.</span>
            </a>
            <p className="text-gray-400 mt-2">Web Developer & Designer</p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
