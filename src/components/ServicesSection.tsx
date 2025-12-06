import { useState } from "react";
import {
  Check,
  Leaf,
  Drumstick,
  UtensilsCrossed,
  CheckCircle,
  Star,
  Crown,
  Gem,
  Menu,
} from "lucide-react";

interface ServicesSectionProps {
  onBooking: (planType: string, planName: string) => void;
}

const ServicesSection = ({ onBooking }: ServicesSectionProps) => {
  const [selectedType, setSelectedType] = useState<"veg" | "non-veg">("veg");

  const proposalMenu = [
    {
      title: "Refresments (90 mins circulation)",
      items: ["Water Melon Juice", "Fruit Punch"],
    },
    {
      title: "Veg Appetizers (90 mins circulation)",
      items: ["VEG RR (ROYAL RECEPIE)", "Baby Corn 65"],
    },
    {
      title: "Salads Bar Station",
      items: [
        "Fresh Green Salad",
        "Classic Veg Greek Salad",
        "Mixed Sprouts",
      ],
    },
    {
      title: "Assorted Indian Breads",
      items: ["Butter Naan", "Masala Kulcha"],
    },
    {
      title: "Sweets - Live Station",
      items: ["Bobbatlu", "Jilebi"],
    },
    {
      title: "Hot Items",
      items: ["Mirchi Bajji", "Sweet Corn Samosa"],
    },
    {
      title: "Sweet Items",
      items: ["Dry Fruit Boorelu", "Carrot Halwa"],
    },
    {
      title: "Main Course",
      items: [
        "Jack Fruit Biryani",
        "Karvepaku Rice",
        "Paneer Butter Masala",
        "Chole Masala",
        "Mulakada Kaju Curry",
        "Guttu Vankaya Curry",
        "Gobi 65",
        "Bendakaya Kaju Fry",
        "Pappu Tomato / Mango",
        "Sambar",
        "Majjiga Pulusu",
      ],
    },
    {
      title: "Fresh Grinded Chutneys",
      items: [
        "Beerakaya Tomato Chutney",
        "Coconut Mango Chutney",
        "Gongura Chutney",
      ],
    },
    {
      title: "Pickles",
      items: ["Fresh Mango Pickle", "Dosakaya Avakaya", "Pandu Mirchi Pickle"],
    },
    {
      title: "Podi’s",
      items: ["Nalla Karam", "Kobbari Karam", "Putnala Podi"],
    },
    {
      title: "Accompaniments",
      items: [
        "White Rice",
        "Premium Fresh Curd",
        "Curd Raitha",
        "Pure Ghee",
        "Plain South Indian Papad & Vadiyalu",
      ],
    },
    {
      title: "Ice Creams",
      items: ["French Vanilla", "Butter Scotch"],
    },
    {
      title: "Desserts",
      items: ["Mini Gulab Jamun"],
    },
    {
      title: "Fruit Bar",
      items: ["Indian - 3 varieties", "Exotic - 3 varieties"],
    },
    {
      title: "Live Pan Station",
      items: ["Special Meetha Paan", "Oreo Paan", "Special Dates Paan"],
    },
    {
      title: "Live Chat Station",
      items: ["Pani Poori", "Aloo Tikka Chat", "Vada Pav"],
    },
  ];

  const vegPlans = [
    {
      name: "Silver",
      items: [
        "Sweet",
        "Hot",
        "Special Rice/Biryani",
        "Raitha",
        "South Indian Curry",
        "Fry Item",
        "Pappu",
        "Sambar",
        "Roti Pachadi",
        "White Rice",
        "Curd",
        "Papad",
      ],
    },
    {
      name: "Gold",
      items: [
        "Sweet",
        "Hot",
        "Roti(Min 100 Members)",
        "Special Rice/Biryani",
        "Raitha",
        "South Indian Curry",
        "North Indian Curry",
        "Fry Item",
        "Pappu",
        "Sambar",
        "Roti Pachadi",
        "Pickle",
        "White Rice",
        "Curd",
        "Papad",
      ],
    },
    {
      name: "Diamond",
      items: [
        "Sweet",
        "Hot",
        "Roti(Min 100 Members)",
        "Special Rice/Biryani",
        "Raitha",
        "South Indian Curry",
        "North Indian Curry",
        "Veg Fry Item",
        "Veg Dry Item",
        "Pappu",
        "Sambar",
        "Roti Pachadi",
        "Pickle",
        "White Rice",
        "Curd",
        "Papad",
        "Veg Salad",
        "Sweet Soump",
        "Ice Cream",
      ],
    },
    {
      name: "Platinum",
      items: [
        "Welcome Drink",
        "Veg Starter",
        "Sweet",
        "Hot",
        "Roti(Min 100 Members)",
        "Special Rice",
        "Veg Biryani/Pulao",
        "Raitha",
        "South Indian Curry",
        "North Indian Curry",
        "Veg Fry Item",
        "Veg Dry Item",
        "Pappu",
        "Sambar",
        "Roti Pachadi",
        "Pickle",
        "White Rice",
        "Curd",
        "Papad",
        "Veg Salad",
        "Sweet Soump",
        "podulu 2 Types",
        "Ghee",
        "Sweet pan",
        "Water Bottle",
        "Ice Cream",
      ],
    },
  ];

  const nonVegPlans = [
    {
      name: "Silver",
      items: [
        "Sweet",
        "Hot",
        "Roti(min 100 Members)",
        "plain/Chicken Biryani(Chicken fry/MuttonCurry--Dum Biryani(Mutton Curry))",
        "Raitha",
        "South Indian Curry",
        "Fry Item",
        "Pappu",
        "Sambar",
        "Roti Pachadi",
        "White Rice",
        "Curd",
        "Papad",
        "Chicken Fry",
        "Mutton Curry",
      ],
    },
    {
      name: "Gold",
      items: [
        "Sweet",
        "Hot",
        "Roti(min 100 Members)",
        "Non Veg Biryani/Pulao",
        "Raitha",
        "South Indian Curry",
        "Fry Item",
        "Pappu",
        "Sambar",
        "Roti Pachadi",
        "White Rice",
        "Curd",
        "Papad",
        "Fish Boneless fry",
        "Chicken Fry",
        "Mutton Curry",
        "Ice Cream",
      ],
    },
    {
      name: "Diamond",
      items: [
        "Sweet",
        "Hot",
        "Roti(min 100 Members)",
        "Veg Biryani/Pulao",
        "Non Veg Biryani/Pulao",
        "Raitha",
        "South Indian Curry",
        "North Indian Curry",
        "Veg Fry Item",
        "Veg Dry Item",
        "Pappu",
        "Sambar",
        "Roti Pachadi",
        "Pickle",
        "White Rice",
        "Curd",
        "Papad",
        "Veg Salad",
        "Sweet Soump",
        "Sweet Pan",
        "Fish/Prawans (fry/Curry)",
        "Chicken Fry",
        "Mutton Curry",
        "Ice Cream",
      ],
    },
    {
      name: "Platinum",
      items: [
        "Weclome Drink",
        "Veg Starter",
        "Non Veg Starter",
        "Sweet",
        "Hot",
        "Roti(min 100 Members)",
        "Veg Biryani/Pulao",
        "Non Veg Biryani/Pulao",
        "Raitha",
        "South Indian Curry",
        "North Indian Curry",
        "Veg Fry Item",
        "Veg Dry Item",
        "Pappu",
        "Sambar",
        "Roti Pachadi",
        "Pickle",
        "White Rice",
        "Curd",
        "Papad",
        "Veg Salad",
        "Sweet Soump",
        "Sweet Pan",
        "Podulu 2 Types",
        "Ghee",
        "Water Bottles",
        "Fish/Prawans (fry/Curry)",
        "Chicken Fry",
        "Mutton Curry",
        "Ice Cream",
      ],
    },
  ];

  const plans = selectedType === "veg" ? vegPlans : nonVegPlans;

  // ICONS FOR EACH PLAN NAME
  const planIcons: Record<string, JSX.Element> = {
    Silver: <Star size={36} />,
    Gold: <Crown size={36} />,
    Platinum: <Gem size={36} />,
    Diamond: <CheckCircle size={36} />,
  };

  return (
    <section id="services" className="bg-white text-black">
      <div className="relative">
        {/* TOP BANNER */}
        <div className="relative h-[420px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
            className="w-full h-full object-cover"
            alt="Shankara Catering"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-5xl font-bold tracking-wide text-center">
              Shankara Outdoor Catering
            </h2>
            <p className="mt-3 text-xl italic opacity-90">
              “Where every flavour becomes a memory.”
            </p>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            fill="white"
          >
            <path d="M0,256L1440,160L1440,320L0,320Z"></path>
          </svg>
        </div>

        {/* INTRO */}
        <div className="max-w-5xl mx-auto px-6 -mt-10 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            For decades, Shankara Catering has delivered premium hospitality with
            unmatched taste and seamless service. Whether it's a wedding, event or
            corporate gathering — our curated menus and professional team ensure an
            unforgettable experience for every guest.
          </p>
        </div>

        {/* CATEGORY SELECTOR */}
        <div className="max-w-xl mx-auto mt-10 mb-16">
          <div className="flex bg-gray-100 p-2 rounded-full shadow-md justify-center space-x-4">
            <button
              onClick={() => setSelectedType("veg")}
              className={`w-1/2 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition ${
                selectedType === "veg"
                  ? "bg-[#FFB343] text-white shadow-lg"
                  : "text-[#b98028] hover:bg-gray-200"
              }`}
            >
              <Leaf size={20} /> Vegetarian
            </button>

            <button
              onClick={() => setSelectedType("non-veg")}
              className={`w-1/2 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition ${
                selectedType === "non-veg"
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-red-600 hover:bg-gray-200"
              }`}
            >
              <Drumstick size={20} /> Non-Vegetarian
            </button>
          </div>
        </div>

        {/* PLAN SECTION TITLE */}
        <h2 className="text-4xl font-bold text-center text-[#FFB343] mb-10 flex items-center justify-center gap-3">
          <UtensilsCrossed size={32} className="text-[#FFB343]" />
          <span>Select Your Catering Plan</span>
        </h2>

        {/* PLAN CARDS GRID */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white shadow-xl rounded-3xl border border-gray-200 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-[#FFB343] to-[#e49a23] text-white p-6 rounded-t-3xl text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-white/20 p-3 rounded-full">
                    {planIcons[plan.name]}
                  </div>
                </div>
                <h3 className="text-3xl font-bold">{plan.name}</h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.items.map((item, idx) => (
                    <li key={idx} className="flex space-x-3 items-start">
                      <CheckCircle size={18} className="text-green-600 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onBooking(selectedType, plan.name)}
                  className="w-full bg-[#FFB343] hover:bg-[#c57a1d] text-white py-3 rounded-xl font-semibold transition shadow-md"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="my-20 flex justify-center">
          <div className="w-32 h-1 bg-[#FFB343] rounded-full"></div>
        </div>

        {/* TERMS SECTION */}
        <h2 className="text-4xl font-bold text-center text-[#FFB343] mb-8">
          Terms & Conditions
        </h2>

        <div className="max-w-3xl mx-auto px-6 text-lg space-y-4 text-gray-700 leading-relaxed">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check size={18} className="text-[#FFB343] mt-1" />
              <span>Advance once paid will not be refunded.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-[#FFB343] mt-1" />
              <span>50% advance should be paid at the time of booking.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-[#FFB343] mt-1" />
              <span>Remaining balance must be settled before the event.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">Note:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check size={18} className="text-[#FFB343] mt-1" />
              <span>Extra plates up to 10% are not chargeable.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-[#FFB343] mt-1" />
              <span>More than 10% extra plates will be charged.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-[#FFB343] mt-1" />
              <span>₹5000 cutlery deposit refundable after return.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-[#FFB343] mt-1" />
              <span>Service available only for events with 50+ guests.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-[#FFB343] mt-1" />
              <span>
                Service charges ₹50 per plate (includes staff & essentials).
              </span>
            </li>
          </ul>
        </div>

        {/* MENU TITLE */}
        <h2 className="text-4xl font-bold text-center text-[#FFB343] mt-20 mb-10">
          Shankara Marriage & Event Menu
        </h2>

        {/* MENU GRID */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {proposalMenu.map((section, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-3xl shadow-lg border border-[#FFB343]/20"
            >
              <h3 className="text-2xl font-bold text-[#FFB343] mb-4 flex items-center gap-2">
                <Menu size={22} className="text-[#FFB343]" />
                {section.title}
              </h3>

              <ul className="space-y-2 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle size={18} className="text-[#FFB343] mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 mb-10 text-xl text-[#6a4f2a] font-semibold">
          “Crafting exceptional experiences — one event at a time.”
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
