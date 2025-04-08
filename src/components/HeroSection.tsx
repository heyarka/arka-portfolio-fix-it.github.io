
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-blue-400 mb-2 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Arka
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 heading-gradient">
              Web Developer & Designer
            </h2>
            <p className="text-gray-400 mb-8 text-lg max-w-lg">
              I create beautiful, functional, and responsive websites that help businesses grow and stand out online.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 border border-gray-600 hover:border-white text-white rounded-md transition-colors">
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/heyarka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
              <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-background flex items-center justify-center text-center">
                <span className="text-2xl md:text-3xl font-bold text-white">Arka</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
