import { useState } from "react";
import {
  Check,
  Leaf,
  Drumstick,
  UtensilsCrossed,
  CheckCircle,
  Crown,
  Star,
  Gem,
} from "lucide-react";

interface ServicesSectionProps {
  onBooking: (planType: string, planName: string) => void;
}

type PlanName = "Silver" | "Gold" | "Diamond" | "Platinum";

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
      items: ["Fresh Green Salad", "Classic Veg Greek Salad", "Mixed Sprouts"],
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

  // ------------------------------------------------------------
  // VEG PLANS (FIXED)
  // ------------------------------------------------------------
  const vegPlans: Array<{ name: PlanName; items: string[] }> = [
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
        "Podulu 2 Types",
        "Ghee",
        "Sweet Pan",
        "Water Bottle",
        "Ice Cream",
      ],
    },
  ];

  // ------------------------------------------------------------
  // NON-VEG PLANS (FIXED)
  // ------------------------------------------------------------
  const nonVegPlans: Array<{ name: PlanName; items: string[] }> = [
    {
      name: "Silver",
      items: [
        "Sweet",
        "Hot",
        "Roti(min 100 Members)",
        "Chicken/Plain Biryani",
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
        "Fish/Prawns Fry or Curry",
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
        "Fish/Prawns (Fry/Curry)",
        "Chicken Fry",
        "Mutton Curry",
        "Ice Cream",
      ],
    },
  ];

  const plans = selectedType === "veg" ? vegPlans : nonVegPlans;

  // ------------------------------------------------------------
  // PREMIUM PLAN CARD STYLES
  // ------------------------------------------------------------
  const planStyles: Record<
  PlanName,
  { gradient: string; glow: string; ring: string }
> = {
  Silver: {
    gradient: "from-[#4B5563] to-[#1F2937]", // Dark gray → charcoal
    glow: "shadow-[0_0_25px_rgba(120,120,120,0.6)]",
    ring: "bg-gradient-to-br from-gray-500 to-gray-700", // metallic steel
  },

  Gold: {
    gradient: "from-[#B8860B] to-[#5C3B07]", // Dark luxury gold
    glow: "shadow-[0_0_25px_rgba(184,134,11,0.6)]",
    ring: "bg-gradient-to-br from-yellow-700 to-yellow-900", // glowing dark gold
  },

  Platinum: {
    gradient: "from-[#6B7280] to-[#111827]", // Gunmetal → black
    glow: "shadow-[0_0_25px_rgba(150,150,150,0.6)]",
    ring: "bg-gradient-to-br from-slate-500 to-slate-800", // premium platinum-metal
  },

  Diamond: {
    gradient: "from-[#1E3A8A] to-[#0F172A]", // Deep royal blue → midnight
    glow: "shadow-[0_0_25px_rgba(30,58,138,0.7)]",
    ring: "bg-gradient-to-br from-blue-700 to-blue-900", // luxury diamond blue
  },
};


  const planIcons: Record<PlanName, JSX.Element> = {
    Silver: <Leaf className="w-10 h-10" />,
    Gold: <Crown className="w-10 h-10" />,
    Platinum: <Gem className="w-10 h-10" />,
    Diamond: <Star className="w-10 h-10" />,
  };

  // ------------------------------------------------------------
  // MAIN RETURN UI
  // ------------------------------------------------------------
  return (
    <section id="services" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
            MEENAKSHI Outdoor Catering
          </h2>
          <p className="text-xl italic text-[#5a452a]">
            “Flavors that tell a story, service that makes it unforgettable.”
          </p>
          <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            At MEENAKSHI Outdoors, we take our personal love for food to
            the next level with innovative gastronomic techniques. Every event is an
            opportunity to exceed expectations and deliver unforgettable
            experiences.
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex justify-center mb-14">
          <div className="bg-white p-3 rounded-full shadow-lg flex space-x-2">
            <button
              onClick={() => setSelectedType("veg")}
              className={`px-8 py-2 rounded-full flex items-center space-x-2 transition ${
                selectedType === "veg"
                  ? "bg-[#875724] text-white shadow"
                  : "text-[#875724] hover:bg-[#eadabc]"
              }`}
            >
              <Leaf size={20} />
              <span>Vegetarian</span>
            </button>

            <button
              onClick={() => setSelectedType("non-veg")}
              className={`px-8 py-2 rounded-full flex items-center space-x-2 transition ${
                selectedType === "non-veg"
                  ? "bg-red-600 text-white shadow"
                  : "text-red-600 hover:bg-[#eadabc]"
              }`}
            >
              <Drumstick size={20} />
              <span>Non-Vegetarian</span>
            </button>
          </div>
        </div>

        {/* PREMIUM PLAN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {plans.map((plan) => {
            const style = planStyles[plan.name];

            return (
              <div
                key={plan.name}
                className={`
                  relative p-7 rounded-3xl border backdrop-blur-xl
                  bg-white/20 border-white/30 
                  transition-all duration-500
                  hover:-translate-y-3 hover:shadow-2xl
                  ${style.glow}
                `}
              >
                {/* Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-40 rounded-3xl`}
                />

                {/* ICON */}
                <div className="relative flex justify-center mb-6">
                  <div
                    className={`
                      p-5 rounded-full shadow-xl border border-white/40 
                      backdrop-blur-md ${style.ring}
                    `}
                  >
                    {planIcons[plan.name]}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-extrabold text-center mb-6 tracking-wide">
                  {plan.name}
                </h3>

                {/* ITEMS */}
                <ul className="space-y-3 mb-8 relative">
                  {plan.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button
                  onClick={() => onBooking(selectedType, plan.name)}
                  className="
                    w-full bg-gradient-to-r from-[#875724] to-[#6a431c]
                    hover:from-[#6a431c] hover:to-[#4a2e17]
                    text-white py-3 rounded-xl text-lg font-bold
                    shadow-lg hover:shadow-xl transition
                  "
                >
                  Choose Plan
                </button>
              </div>
            );
          })}
        </div>

        {/* TERMS */}
        <h2 className="text-4xl font-bold text-center text-[#875724] mb-6">
          Terms & Conditions
        </h2>
        <div className="max-w-3xl mx-auto text-lg space-y-3 text-[#875724]">
          <ul className="list-disc pl-6 space-y-2">
            <li>Advance once paid will not be refunded.</li>
            <li>50% advance should be paid at the time of order.</li>
            <li>Balance 50% has to be paid before the party.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">Note :</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>5–10% will not be chargeable for extra plates.</li>
            <li>Above 10% will be chargeable for each plate.</li>
            <li>₹5000 deposit for cutlery (refundable after return).</li>
            <li>Service available only for events above 50 members.</li>
            <li>
              Service charges ₹50/- per plate including staff, disposables,
              transport, water bottles.
            </li>
          </ul>
        </div>

        {/* MENU */}
        <h2 className="mt-12 text-4xl font-bold text-center text-[#875724] mb-10">
          Full MEENAKSHI Marriage & Events Menu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {proposalMenu.map((section, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#875724]/20"
            >
              <h3 className="text-2xl font-bold text-[#875724] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex space-x-2">
                    <UtensilsCrossed size={18} className="text-[#875724]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 text-xl text-[#6a4f2a] font-semibold">
          “Creating unforgettable experiences—one event at a time!”
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
