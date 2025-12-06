import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Gallery from "../components/Gallery";
import { Star, Award, Users, Sparkles } from "lucide-react";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import WhatsAppWidget from "../components/WhatsApp";

interface HomePageProps {
  onBooking: (planType: string, planName: string) => void;
}

const HomePage = ({ onBooking }: HomePageProps) => {
  const stats = [
    { icon: Users, value: "1,00,000+", label: "Happy Customers" },
    { icon: Award, value: "30+", label: "Years Experience" },
    { icon: Star, value: "10,000+", label: "Events Completed" },
    { icon: Sparkles, value: "100%", label: "Satisfaction" },
  ];

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <HeroSection />

      {/* WELCOME SECTION */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#FFB343] mb-6">
              Welcome to Shankara Caterings
            </h2>

            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed opacity-90">
              Discover the true essence of traditional South Indian culinary
              excellence, crafted with passion and served with elegance.
              Shankara Caterings brings unforgettable flavors, seamless service,
              and premium hospitality to every event.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#FFB343] rounded-2xl shadow-xl 
                hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <stat.icon className="h-8 w-8 text-[#FFB343]" />
                </div>

                <h3 className="text-3xl font-bold text-black">{stat.value}</h3>
                <p className="text-black font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <ServicesSection onBooking={onBooking} />

      {/* ABOUT SECTION */}
      <AboutPage />

      {/* SPECIAL FEATURES */}
      <section className="py-20 bg-[#FFB343] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl font-bold mb-8">What Makes Us Special</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Fresh Ingredients",
                    desc: "Only the freshest produce and spices used daily.",
                  },
                  {
                    title: "Expert Chefs",
                    desc: "Culinary masters with decades of experience.",
                  },
                  {
                    title: "Customizable Menus",
                    desc: "Menus curated to match your taste and event theme.",
                  },
                  {
                    title: "Professional Service",
                    desc: "Highly trained team ensuring smooth event execution.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-black/40 rounded-full p-2">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-[#EADABC] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.57_0870ac85_zeffzb.jpg"
                alt="Special Features"
                className="rounded-3xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />
      <WhatsAppWidget />


    

      {/* CONTACT SECTION */}
      <ContactPage />
    </div>
  );
};

export default HomePage;
