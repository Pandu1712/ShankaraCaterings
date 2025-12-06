import { Users, Trophy, Sparkles, Timer } from "lucide-react";

const AboutPage = () => {
  const highlights = [
    { number: "30+", label: "Years Experience" },
    { number: "5000+", label: "Events Catered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Specialty Dishes" },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Highly skilled chefs and a dedicated service team delivering excellence every time.",
    },
    {
      icon: Trophy,
      title: "Premium Standard",
      description:
        "We follow strict quality, hygiene and taste standards that set us apart.",
    },
    {
      icon: Sparkles,
      title: "Authentic Flavours",
      description:
        "Every dish is made using fresh ingredients and traditional methods.",
    },
    {
      icon: Timer,
      title: "Reliable & On-Time",
      description:
        "Punctual delivery and smooth execution for all event types.",
    },
  ];

  return (
    <section className="bg-white pb-20" id="About">
      
      {/* TOP BANNER */}
      <div className="relative h-[420px] w-full">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          className="w-full h-full object-cover"
          alt="banner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white">
          <h1 className="text-5xl font-bold tracking-wide">About Shankara Catering</h1>
          <p className="mt-4 text-xl opacity-90">
            Excellence in Taste. Excellence in Service.
          </p>
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#4a3c2b]">Who We Are</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Shankara Outdoor Catering is known for delivering premium catering 
            experiences that blend tradition, creativity, and perfect execution. 
            From small gatherings to large celebrations, our approach remains 
            rooted in authenticity and quality.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Every dish we serve is crafted with precision — using time-honored 
            recipes, fresh ingredients, and expert techniques developed over 
            decades. Our team is committed to providing unforgettable taste and 
            seamless service.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it’s a wedding, corporate event, or family function, our 
            dedication to excellence ensures your special moments are truly 
            memorable.
          </p>
        </div>

        {/* RIGHT IMAGE & CARD */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
            className="rounded-2xl shadow-2xl"
            alt="story"
          />

          <div className="absolute -bottom-8 -right-8 bg-[#f4a83d] text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-4xl font-extrabold">30+</h3>
            <p className="text-sm tracking-wide">Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* HIGHLIGHTS SECTION */}
      <div className="max-w-6xl mx-auto mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 px-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="text-center p-6 bg-[#FFB343] rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <p className="text-4xl font-bold text-[#875724]">{item.number}</p>
            <p className="text-sm text-gray-700 mt-2 tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto mt-24 px-6">
        <h2 className="text-4xl font-bold text-center text-[#4a3c2b] mb-14">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#f4a83d] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-center text-[#4a3c2b]">
                {item.title}
              </h3>

              <p className="text-center text-gray-700 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PROMISE SECTION */}
      <div className="max-w-6xl mx-auto mt-28 px-6">
        <div className="bg-[#FFB343] text-white p-14 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment</h2>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            We do more than serve meals — we create culinary memories.
            From selecting quality ingredients to delivering beautifully 
            presented dishes and reliable service, every step is handled 
            with utmost care to ensure your event is exceptional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
