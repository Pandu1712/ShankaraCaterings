import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome To Shankara Parcel and Catering',
      description: 'Authentic South Indian Culinary Excellence',
      image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1765031546/WhatsApp_Image_2025-12-06_at_09.38.04_e5791a56_nbt2yn.jpg',
    },
    {
      title: 'Fresh. Traditional. Homely.',
      description: 'Experience the True Taste of Southern India',
      image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.58_89ee7aea_lidvmj.jpg',
    },
    {
      title: 'Crafted With Love',
      description: 'Delivering Flavours Straight From Our Kitchen',
      image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.09.00_1d77ff63_ytdi9w.jpg',
    },
    {
      title: 'Tradition Meets Taste',
      description: 'Serving Happiness in Every Box',
      image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1765031544/WhatsApp_Image_2025-12-06_at_09.38.11_614d0b49_ykpwtq.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[650px] md:h-[750px] overflow-hidden bg-black">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105 animate-slowZoom"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
            <h1
              className={`text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl transition-all duration-700 
                ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {slide.title}
            </h1>

            <p
              className={`text-amber-200 mt-4 text-lg md:text-2xl font-light transition-all duration-700 delay-300 
                ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {slide.description}
            </p>

            {/* Frosted Glass Box */}
            <div
              className={`mt-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white text-sm md:text-base shadow-xl transition-all duration-700 
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
              `}
            >
              Traditional Taste • Premium Quality • Fast Delivery
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white shadow-lg transition-all hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white shadow-lg transition-all hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Thumbnail Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all 
              ${index === currentSlide ? 'border-amber-500 scale-110' : 'border-white/30'}
            `}
          >
            <img
              src={slide.image}
              className="w-14 h-10 object-cover"
              alt="thumbnail"
            />
          </div>
        ))}
      </div>

      {/* Slow Zoom Animation */}
      <style>
        {`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-slowZoom {
          animation: slowZoom 8s ease-in-out infinite alternate;
        }
      `}
      </style>
    </div>
  );
};

export default HeroSection;
