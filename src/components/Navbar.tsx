import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
 <nav className="bg-[#FFB343] shadow-lg fixed top-0 left-0 w-full z-50 border-b-2 border-[#FFB343]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigate('home')}>
        <div className="shadow-md">
          <img
            src="/Shankaralogo.jpg"
            alt="Logo"
            className="h-14 w-14 object-contain rounded-full"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            Shankara Caterings
          </h1>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === item.id
                ? 'text-black shadow-md bg-white'
                : 'text-white hover:bg-[#F3E6CC] hover:text-[#6A431E]'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg text-[#875724] hover:bg-[#F3E6CC] transition-colors"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

    </div>
  </div>

  {isMenuOpen && (
    <div className="md:hidden bg-[#F6EBDD] border-t border-[#D8C4A1] shadow-inner">
      <div className="px-4 py-3 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              currentPage === item.id
                ? 'bg-[#875724] text-white shadow-md'
                : 'text-[#875724] hover:bg-[#F3E6CC]'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>


  );
};

export default Navbar;
