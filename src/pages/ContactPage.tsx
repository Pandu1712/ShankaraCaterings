import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    functionType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Shankara Caterings!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AFunction Type: ${formData.functionType}%0A%0AMessage:%0A${formData.message}`;

    window.open(`https://wa.me/919885667575
?text=${message}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, '');

    if (cleaned.length <= 10) {
      setFormData({ ...formData, phone: cleaned });
    }
  };

  return (
     <section id="Contact">
    <div className="min-h-screen bg-white">

      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-[black] pt-10">
        Contact Us
      </h1>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">Get In Touch</h2>

            <div className="space-y-6 mb-8">

              {/* Address */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#FFB343] p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Office</h3>
                  <p className="text-gray-700">
                    Lane 2, Shilpa Gardens, 11B 11C,<br/> Kondapur, Hyderabad, Telangana 500084
                  </p>
                  <h3 className="font-semibold text-[black] mb-1">Kitchen</h3>
                  <p>
                     D No 3-353/LIG, Road No 42 D. Mayuri Nagar, <br/>Miyapur, Hyderabad, Telangana 500049
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#FFB343] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[black] mb-1">Phone</h3>
                  <p className="text-gray-700">+91 7702237575</p>
                  <p className="text-gray-700">+91 9885667575</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#FFB343] p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[black] mb-1">Email</h3>
                  <p className="text-gray-700">shankaracaterers@gmail.com</p>
                  
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#FFB343] p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[black] mb-1">Working Hours</h3>
                  <p className="text-gray-700">Monday - Sunday</p>
                  <p className="text-gray-700">24*7</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-[black] mb-6">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[black] mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[black]"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[black] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[black]"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[black] mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[black]"
                  placeholder="9876543210"
                />
                <p className="text-xs text-red-600 mt-1">
                  {formData.phone.length > 0 && formData.phone.length < 10
                    ? 'Phone number must be 10 digits'
                    : ''}
                </p>
              </div>

              {/* Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-[black] mb-2">Function Type</label>
                <select
                  name="functionType"
                  required
                  value={formData.functionType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[black]"
                >
                  <option value="">Select Function</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Reception">Reception</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="House Warming">House Warming</option>
                  <option value="Baby Shower">Baby Shower</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[black] mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[black] resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formData.phone.length !== 10}
                className="w-full bg-[#FFB343] text-white py-4 rounded-lg font-semibold hover:bg-[#6A431E] transition-all duration-300 shadow-lg disabled:opacity-40"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Send className="h-5 w-5" />
                  <span>Send Message on WhatsApp</span>
                </div>
              </button>

            </form>
          </div>
        </div>

        {/* ⭐ GOOGLE MAP SECTION */}
        <div className="mt-16">
  <h2 className="text-3xl font-bold text-black mb-10 text-center">
    Our Locations
  </h2>

  <div className="flex flex-col md:flex-row gap-8 justify-center">
    
    {/* Kitchen Location */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-center mb-3 text-black">
        Kitchen Location
      </h3>

      <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-xl border-4 border-black">
        <iframe
          title="Kitchen Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.802518110807!2d78.371053!3d17.516938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMxJzAxLjAiTiA3OMKwMjInMTUuOCJF!5e0!3m2!1sen!2sin!4v1765038410174!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Office Location */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-center mb-3 text-black">
        Office Location
      </h3>

      <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-xl border-4 border-black">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.5130839072817!2d78.3427416751671!3d17.48300418342056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI4JzU4LjgiTiA3OMKwMjAnNDMuMSJF!5e0!3m2!1sen!2sin!4v1765079832655!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>

  </div>
</div>


      </div>
    </div>
    </section>
  );
};

export default ContactPage;
