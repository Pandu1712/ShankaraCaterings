"use client";

const WhatsAppWidget = () => {
  const phone = "919885667575"; // your WhatsApp number

  const openWhatsApp = () => {
    const url = `https://wa.me/${phone}`;
    window.location.href = url; // 100% reliable on all devices
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700
      text-white p-4 rounded-full shadow-xl transition-all duration-300 
      hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.85 11.85 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.62 5.98L0 24l6.34-1.66A11.87 11.87 0 1012 0c3.06 0 5.9 1.19 8.52 3.48zM12 21.6a9.6 9.6 0 01-4.89-1.34l-.36-.22-3.76 1 1-3.67-.24-.39A9.57 9.57 0 1121.6 12a9.52 9.52 0 01-9.6 9.6zm5.29-6.88c-.3-.15-1.72-.85-1.98-.95-.26-.1-.45-.14-.64.15-.19.29-.74.95-.91 1.14-.17.19-.33.22-.61.07a7.92 7.92 0 01-3.58-3.12c-.27-.47.27-.44.78-1.46.1-.2.05-.37-.03-.51-.08-.14-.66-1.6-.92-2.2-.24-.57-.49-.49-.66-.5h-.57c-.19 0-.4.06-.62.27-.21.21-.81.79-.81 1.93 0 1.14.83 2.24.95 2.4.11.16 1.63 2.48 3.96 3.47 2.33.98 2.33.65 2.75.62.42-.03 1.38-.56 1.57-1.1.19-.53.19-.98.14-1.1-.04-.12-.15-.18-.45-.32z" />
      </svg>
    </button>
  );
};

export default WhatsAppWidget;
